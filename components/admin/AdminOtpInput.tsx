"use client";

import { useEffect, useRef } from "react";

const OTP_LENGTH = 6;

type AdminOtpInputProps = {
  value: string;
  onChange: (value: string) => void;
  onComplete?: (value: string) => void;
  disabled?: boolean;
  autoFocus?: boolean;
};

export function AdminOtpInput({
  value,
  onChange,
  onComplete,
  disabled = false,
  autoFocus = false,
}: AdminOtpInputProps) {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const digits = Array.from({ length: OTP_LENGTH }, (_, index) => value[index] ?? "");

  const focusIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(OTP_LENGTH - 1, index));
    inputsRef.current[clamped]?.focus();
  };

  const commitValue = (next: string) => {
    const cleaned = next.replace(/\D/g, "").slice(0, OTP_LENGTH);
    onChange(cleaned);
    if (cleaned.length === OTP_LENGTH) {
      onComplete?.(cleaned);
    }
    return cleaned;
  };

  const handleChange = (index: number, raw: string) => {
    const digit = raw.replace(/\D/g, "").slice(-1);
    const nextDigits = [...digits];
    nextDigits[index] = digit;
    const cleaned = commitValue(nextDigits.join(""));
    if (digit && index < OTP_LENGTH - 1) {
      focusIndex(index + 1);
    }
    if (!digit && cleaned.length === 0) {
      focusIndex(index);
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Backspace") {
      event.preventDefault();
      if (digits[index]) {
        const nextDigits = [...digits];
        nextDigits[index] = "";
        commitValue(nextDigits.join(""));
        return;
      }
      if (index > 0) {
        const nextDigits = [...digits];
        nextDigits[index - 1] = "";
        commitValue(nextDigits.join(""));
        focusIndex(index - 1);
      }
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusIndex(index - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      focusIndex(index + 1);
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const cleaned = commitValue(event.clipboardData.getData("text"));
    focusIndex(Math.min(cleaned.length, OTP_LENGTH - 1));
  };

  useEffect(() => {
    if (autoFocus) {
      focusIndex(0);
    }
  }, [autoFocus]);

  return (
    <div className="admin-otp-input" role="group" aria-label="6 位驗證碼">
      {digits.map((digit, index) => (
        <input
          key={index}
          ref={(element) => {
            inputsRef.current[index] = element;
          }}
          type="text"
          inputMode="numeric"
          autoComplete={index === 0 ? "one-time-code" : "off"}
          maxLength={1}
          className="admin-otp-input__cell"
          value={digit}
          disabled={disabled}
          aria-label={`驗證碼第 ${index + 1} 碼`}
          onChange={(event) => handleChange(index, event.target.value)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          onPaste={handlePaste}
          onFocus={(event) => event.target.select()}
        />
      ))}
    </div>
  );
}
