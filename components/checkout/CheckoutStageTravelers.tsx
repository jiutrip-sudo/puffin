"use client";

import type { CheckoutSession, CheckoutTravelerForm } from "@/lib/checkout/types";

type StageTravelersProps = {
  session: CheckoutSession;
  onChange: (travelers: CheckoutTravelerForm[]) => void;
};

function travelerLabel(type: CheckoutTravelerForm["type"], index: number) {
  if (type === "ADULT") return `第 ${index + 1} 位成人`;
  if (type === "CHILD") return `第 ${index + 1} 位兒童`;
  return `第 ${index + 1} 位嬰兒`;
}

export function CheckoutStageTravelers({
  session,
  onChange,
}: StageTravelersProps) {
  const updateTraveler = (
    correlationId: number,
    patch: Partial<CheckoutTravelerForm>,
  ) => {
    onChange(
      session.travelers.map((traveler) =>
        traveler.correlationId === correlationId
          ? { ...traveler, ...patch }
          : traveler,
      ),
    );
  };

  let adultIndex = 0;
  let childIndex = 0;
  let infantIndex = 0;

  return (
    <div className="checkout-stage">
      <h2 className="checkout-block__title">旅客資訊</h2>
      <p className="checkout-block__desc">
        請確保姓名與護照完全一致；主要旅客（第一位成人）將作為訂單聯絡人。
      </p>

      <div className="checkout-traveler-list">
        {session.travelers.map((traveler) => {
          let label: string;
          if (traveler.type === "ADULT") {
            label = travelerLabel("ADULT", adultIndex);
            adultIndex += 1;
          } else if (traveler.type === "CHILD") {
            label = travelerLabel("CHILD", childIndex);
            childIndex += 1;
          } else {
            label = travelerLabel("INFANT", infantIndex);
            infantIndex += 1;
          }

          const isLead =
            traveler.type === "ADULT" && traveler.correlationId === 1;

          return (
            <fieldset
              key={traveler.correlationId}
              className="checkout-traveler-card"
            >
              <legend>
                {label}
                {isLead ? "（主要旅客）" : ""}
              </legend>
              <div className="checkout-traveler-grid">
                <label className="checkout-field">
                  <span className="checkout-field__label">名</span>
                  <input
                    className="checkout-field__input"
                    value={traveler.firstName}
                    onChange={(e) =>
                      updateTraveler(traveler.correlationId, {
                        firstName: e.target.value,
                      })
                    }
                  />
                </label>
                <label className="checkout-field">
                  <span className="checkout-field__label">姓</span>
                  <input
                    className="checkout-field__input"
                    value={traveler.lastName}
                    onChange={(e) =>
                      updateTraveler(traveler.correlationId, {
                        lastName: e.target.value,
                      })
                    }
                  />
                </label>
                <label className="checkout-field">
                  <span className="checkout-field__label">出生日期</span>
                  <input
                    type="date"
                    className="checkout-field__input"
                    value={traveler.dateOfBirth}
                    onChange={(e) =>
                      updateTraveler(traveler.correlationId, {
                        dateOfBirth: e.target.value,
                      })
                    }
                  />
                </label>
                <label className="checkout-field">
                  <span className="checkout-field__label">國籍</span>
                  <input
                    className="checkout-field__input"
                    value={traveler.nationality}
                    onChange={(e) =>
                      updateTraveler(traveler.correlationId, {
                        nationality: e.target.value,
                      })
                    }
                  />
                </label>
                {traveler.type === "ADULT" && (
                  <>
                    <label className="checkout-field">
                      <span className="checkout-field__label">電子郵件</span>
                      <input
                        type="email"
                        className="checkout-field__input"
                        value={traveler.email}
                        onChange={(e) =>
                          updateTraveler(traveler.correlationId, {
                            email: e.target.value,
                          })
                        }
                      />
                    </label>
                    <label className="checkout-field">
                      <span className="checkout-field__label">手機</span>
                      <input
                        type="tel"
                        className="checkout-field__input"
                        value={traveler.phoneNumber}
                        onChange={(e) =>
                          updateTraveler(traveler.correlationId, {
                            phoneNumber: e.target.value,
                          })
                        }
                      />
                    </label>
                    <label className="checkout-field">
                      <span className="checkout-field__label">居住國家</span>
                      <input
                        className="checkout-field__input"
                        value={traveler.countryOfResidence}
                        onChange={(e) =>
                          updateTraveler(traveler.correlationId, {
                            countryOfResidence: e.target.value,
                          })
                        }
                      />
                    </label>
                  </>
                )}
              </div>
            </fieldset>
          );
        })}
      </div>
    </div>
  );
}
