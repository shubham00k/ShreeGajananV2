// Helper declaration to allow as-child on Card in Articles page without TS errors
declare module "@/components/ui/card" {
  interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    asChild?: boolean | string;
  }
}
