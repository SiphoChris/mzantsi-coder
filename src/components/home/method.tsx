import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { methodSteps, type MethodStep } from '@/lib/home.data';

function MethodCard({ step }: { step: MethodStep }) {
  return (
    <Card>
      <CardContent className="pt-5 pb-5">
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">
          Step {step.step}
        </p>
        <p
          className="text-3xl font-bold mb-2"
          style={{ color: '#2e8639' }}
        >
          {step.question}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
      </CardContent>
    </Card>
  );
}

export function Method() {
  return (
    <>
      {/* Lesson method */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
          How every lesson works
        </p>
        <h2 className="text-2xl font-bold tracking-tight mb-8">
          What · Why · How
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {methodSteps.map((step) => (
            <MethodCard key={step.step} step={step} />
          ))}
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Audience editions */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
          Made for where you are
        </p>
        <h2 className="text-2xl font-bold tracking-tight mb-2">
          Same video, different edition
        </h2>
        <p className="text-sm text-muted-foreground mb-8">
          Courses come in multiple cuts so you can pick the version that matches your pace.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-5 pb-5">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
                Edition A
              </p>
              <p className="font-semibold text-sm mb-2">
                Beginner{' '}
                <span className="font-normal" style={{ color: '#2e8639' }}>
                  + mini projects
                </span>
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Theory, walkthroughs, and small hands-on builds to cement every concept before moving on.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-5 pb-5">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
                Edition B
              </p>
              <p className="font-semibold text-sm mb-2">
                Beginner{' '}
                <span className="font-normal text-muted-foreground">no mini projects</span>
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Core concepts only — streamlined for viewers who want to get through the material quickly.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}