import { cn } from '@/lib/utils';

interface ISubHeading extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string | null;
}

export const SubHeading: React.FC<ISubHeading> = ({
  title,
  description,
  className,
  ...props
}) => {
  return (
    <div className={cn('grid gap-1', className)} {...props}>
      <h3 className="text-xl font-bold tracking-tight line-clamp-1">{title}</h3>
      {description && (
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      )}
    </div>
  );
};
