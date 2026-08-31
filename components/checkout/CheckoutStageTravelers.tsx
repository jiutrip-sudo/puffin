"use client";

import { forwardRef, useImperativeHandle, useMemo, useState } from "react";
import type { CheckoutSession, CheckoutTravelerForm } from "@/lib/checkout/types";
import {
  hasTravelerFormErrors,
  validateTravelerForms,
  type TravelerFieldErrors,
} from "@/lib/checkout/validate-travelers";

const PHONE_COUNTRY_OPTIONS = [
  { value: "+886", label: "台灣 +886" },
  { value: "+852", label: "香港 +852" },
  { value: "+86", label: "中國 +86" },
  { value: "+81", label: "日本 +81" },
  { value: "+82", label: "韓國 +82" },
  { value: "+65", label: "新加坡 +65" },
  { value: "+60", label: "馬來西亞 +60" },
  { value: "+1", label: "美國 +1" },
  { value: "+44", label: "英國 +44" },
  { value: "+354", label: "冰島 +354" },
  { value: "+61", label: "澳洲 +61" },
];

const COUNTRY_OPTIONS = [
  "台灣",
  "中國",
  "香港",
  "澳門",
  "日本",
  "韓國",
  "新加坡",
  "馬來西亞",
  "美國",
  "加拿大",
  "英國",
  "冰島",
  "澳洲",
  "其他",
];

type StageTravelersProps = {
  session: CheckoutSession;
  onChange: (patch: Partial<CheckoutSession>) => void;
};

export type CheckoutStageTravelersHandle = {
  validate: () => boolean;
};

function travelerOrdinalLabel(
  type: CheckoutTravelerForm["type"],
  index: number,
): string {
  if (type === "ADULT") return `第 ${index + 1} 位成人`;
  if (type === "CHILD") return `第 ${index + 1} 位兒童`;
  return `第 ${index + 1} 位嬰兒`;
}

function buildTravelerSummary(session: CheckoutSession): string {
  const parts: string[] = [];
  if (session.adults > 0) parts.push(`${session.adults} 位成人`);
  if (session.children > 0) parts.push(`${session.children} 位兒童`);
  if (session.infants > 0) parts.push(`${session.infants} 位嬰兒`);
  return parts.join("、");
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="checkout-field__error" role="alert">
      {message}
    </p>
  );
}

function PassportHintIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="checkout-traveler-callout__icon"
      aria-hidden="true"
    >
      <path
        d="M12 8v4m0 4h.01M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export const CheckoutStageTravelers = forwardRef<
  CheckoutStageTravelersHandle,
  StageTravelersProps
>(function CheckoutStageTravelers({ session, onChange }, ref) {
  const [errors, setErrors] = useState<TravelerFieldErrors>({});
  const [showErrors, setShowErrors] = useState(false);

  const leadAdultId = useMemo(
    () =>
      session.travelers.find((traveler) => traveler.type === "ADULT")
        ?.correlationId,
    [session.travelers],
  );

  const travelerSummary = buildTravelerSummary(session);

  const validate = () => {
    const nextErrors = validateTravelerForms(session.travelers);
    setErrors(nextErrors);
    setShowErrors(true);
    return !hasTravelerFormErrors(nextErrors);
  };

  useImperativeHandle(ref, () => ({ validate }), [session.travelers]);

  const refreshErrors = (travelers: CheckoutTravelerForm[]) => {
    const nextErrors = validateTravelerForms(travelers);
    setErrors(nextErrors);
    return nextErrors;
  };

  const updateTraveler = (
    correlationId: number,
    patch: Partial<CheckoutTravelerForm>,
  ) => {
    const nextTravelers = session.travelers.map((traveler) =>
      traveler.correlationId === correlationId
        ? { ...traveler, ...patch }
        : traveler,
    );

    onChange({ travelers: nextTravelers });

    if (showErrors) {
      refreshErrors(nextTravelers);
    }
  };

  const handleFieldBlur = () => {
    const nextErrors = refreshErrors(session.travelers);
    if (hasTravelerFormErrors(nextErrors)) {
      setShowErrors(true);
    }
  };

  let adultIndex = 0;
  let childIndex = 0;
  let infantIndex = 0;

  return (
    <div className="checkout-stage checkout-stage--travelers">
      <section className="checkout-stage-card checkout-stage-card--travelers">
        <header className="checkout-stage-card__header checkout-stage-card__header--travelers">
          <div className="checkout-stage-card__title-row">
            <h2 className="checkout-stage-card__title">旅客資訊</h2>
            {travelerSummary && (
              <span className="checkout-traveler-summary">{travelerSummary}</span>
            )}
          </div>
          <div className="checkout-traveler-callout">
            <PassportHintIcon />
            <p>
              請填寫與護照一致的英文姓名。聯絡資訊僅用於訂單確認與行程通知；日後若需更改姓名可能產生費用。
            </p>
          </div>
        </header>

        <div className="checkout-traveler-list">
          {session.travelers.map((traveler, travelerIndex) => {
            let label: string;
            if (traveler.type === "ADULT") {
              label = travelerOrdinalLabel("ADULT", adultIndex);
              adultIndex += 1;
            } else if (traveler.type === "CHILD") {
              label = travelerOrdinalLabel("CHILD", childIndex);
              childIndex += 1;
            } else {
              label = travelerOrdinalLabel("INFANT", infantIndex);
              infantIndex += 1;
            }

            const isLead = traveler.correlationId === leadAdultId;
            const fieldErrors = errors[traveler.correlationId] ?? {};

            return (
              <article
                key={traveler.correlationId}
                className={`checkout-traveler-block${isLead ? " checkout-traveler-block--lead" : ""}`}
              >
                <header className="checkout-traveler-block__head">
                  <span className="checkout-traveler-block__badge">
                    {travelerIndex + 1}
                  </span>
                  <div className="checkout-traveler-block__head-text">
                    <h3 className="checkout-traveler-block__title">{label}</h3>
                    {isLead && (
                      <span className="checkout-traveler-block__tag">主要旅客</span>
                    )}
                  </div>
                </header>

                <div className="checkout-traveler-grid">
                  <label className="checkout-field checkout-field--span-half">
                    <span className="checkout-field__label">名字</span>
                    <input
                      className={`checkout-field__input${fieldErrors.firstName ? " checkout-field__input--error" : ""}`}
                      value={traveler.firstName}
                      placeholder="與護照相同（英文）"
                      autoComplete={isLead ? "given-name" : "off"}
                      aria-invalid={Boolean(fieldErrors.firstName)}
                      onChange={(event) =>
                        updateTraveler(traveler.correlationId, {
                          firstName: event.target.value,
                        })
                      }
                      onBlur={handleFieldBlur}
                    />
                    <FieldError
                      message={showErrors ? fieldErrors.firstName : undefined}
                    />
                  </label>

                  <label className="checkout-field checkout-field--span-half">
                    <span className="checkout-field__label">姓氏</span>
                    <input
                      className={`checkout-field__input${fieldErrors.lastName ? " checkout-field__input--error" : ""}`}
                      value={traveler.lastName}
                      placeholder="與護照相同（英文）"
                      autoComplete={isLead ? "family-name" : "off"}
                      aria-invalid={Boolean(fieldErrors.lastName)}
                      onChange={(event) =>
                        updateTraveler(traveler.correlationId, {
                          lastName: event.target.value,
                        })
                      }
                      onBlur={handleFieldBlur}
                    />
                    <FieldError
                      message={showErrors ? fieldErrors.lastName : undefined}
                    />
                  </label>

                  {isLead && (
                    <>
                      <label className="checkout-field checkout-field--full">
                        <span className="checkout-field__label">電子郵件</span>
                        <input
                          type="email"
                          className={`checkout-field__input${fieldErrors.email ? " checkout-field__input--error" : ""}`}
                          value={traveler.email}
                          placeholder="用於接收訂單確認信"
                          autoComplete="email"
                          aria-invalid={Boolean(fieldErrors.email)}
                          onChange={(event) =>
                            updateTraveler(traveler.correlationId, {
                              email: event.target.value,
                            })
                          }
                          onBlur={handleFieldBlur}
                        />
                        <FieldError
                          message={showErrors ? fieldErrors.email : undefined}
                        />
                      </label>

                      <div className="checkout-field checkout-field--full">
                        <span className="checkout-field__label">電話號碼</span>
                        <div className="checkout-phone-row">
                          <select
                            className="checkout-field__select checkout-phone-row__country"
                            value={traveler.phoneCountryCode}
                            aria-label="國碼"
                            onChange={(event) =>
                              updateTraveler(traveler.correlationId, {
                                phoneCountryCode: event.target.value,
                              })
                            }
                          >
                            {PHONE_COUNTRY_OPTIONS.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          <input
                            type="tel"
                            className={`checkout-field__input checkout-phone-row__number${fieldErrors.phoneNumber ? " checkout-field__input--error" : ""}`}
                            value={traveler.phoneNumber}
                            placeholder="手機號碼"
                            autoComplete="tel-national"
                            aria-invalid={Boolean(fieldErrors.phoneNumber)}
                            onChange={(event) =>
                              updateTraveler(traveler.correlationId, {
                                phoneNumber: event.target.value,
                              })
                            }
                            onBlur={handleFieldBlur}
                          />
                        </div>
                        <FieldError
                          message={showErrors ? fieldErrors.phoneNumber : undefined}
                        />
                      </div>

                      <label className="checkout-field checkout-field--full">
                        <span className="checkout-field__label">居住國家/地區</span>
                        <select
                          className={`checkout-field__select${fieldErrors.countryOfResidence ? " checkout-field__input--error" : ""}`}
                          value={traveler.countryOfResidence}
                          aria-invalid={Boolean(fieldErrors.countryOfResidence)}
                          onChange={(event) =>
                            updateTraveler(traveler.correlationId, {
                              countryOfResidence: event.target.value,
                            })
                          }
                          onBlur={handleFieldBlur}
                        >
                          <option value="">請選擇</option>
                          {COUNTRY_OPTIONS.map((country) => (
                            <option key={country} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                        <FieldError
                          message={
                            showErrors ? fieldErrors.countryOfResidence : undefined
                          }
                        />
                      </label>
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="checkout-stage-card checkout-stage-card--optional">
        <header className="checkout-stage-card__header">
          <div className="checkout-stage-card__title-row">
            <h2 className="checkout-stage-card__title">附加資訊</h2>
            <span className="checkout-optional-tag">選填</span>
          </div>
          <p className="checkout-stage-card__hint">
            如有特殊需求或代訂資訊，可於此補充；不填寫不影響預訂。
          </p>
        </header>

        <div className="checkout-stage-card__body">
          <label className="checkout-field checkout-field--full">
            <span className="checkout-field__label">特殊需求</span>
            <textarea
              className="checkout-field__textarea checkout-field__textarea--compact"
              rows={3}
              value={session.specialRequests}
              onChange={(event) =>
                onChange({ specialRequests: event.target.value })
              }
              placeholder="例如：飲食限制、輪椅協助、兒童座椅等"
            />
          </label>

          <label className="checkout-field checkout-field--full">
            <span className="checkout-field__label">代理人姓名</span>
            <input
              className="checkout-field__input"
              value={session.agentName}
              onChange={(event) => onChange({ agentName: event.target.value })}
              placeholder="如由旅行社或代理人代訂，請填寫姓名"
            />
          </label>
        </div>
      </section>
    </div>
  );
});
