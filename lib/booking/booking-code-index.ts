/** @deprecated 訂單號查詢請改用 booking-list.findBookingIdByConfirmationCode */
export {
  findBookingIdByConfirmationCode,
} from "./booking-list";

export async function writeBookingCodeIndex(
  _confirmationCode: string,
  _bookingId: string,
): Promise<void> {
  // Neon bookings 表以 confirmation_code 唯一索引，無需額外 KV 索引
}
