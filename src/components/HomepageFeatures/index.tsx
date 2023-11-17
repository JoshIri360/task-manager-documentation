import clsx from "clsx";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [];

function Feature({ title, Svg, description }: FeatureItem) {
  return <div className={clsx("col col--4")}></div>;
}

export default function HomepageFeatures(): JSX.Element {
  return <section></section>;
}
