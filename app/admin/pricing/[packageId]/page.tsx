import { AdminPricingDetailPanel } from "@/components/admin/AdminPricingDetailPanel";

type PageProps = {
  params: Promise<{ packageId: string }>;
};

export default async function AdminPricingDetailPage({ params }: PageProps) {
  const { packageId } = await params;
  return <AdminPricingDetailPanel packageId={decodeURIComponent(packageId)} />;
}
