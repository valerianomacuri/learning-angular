import { SignalExampleComponent } from '../../features/base/components';

import singalExampleHtmlRaw from '../../features/base/components/signal-example/signal-example.component.html';

import singalExampleTsRaw from '../../features/base/components/signal-example/signal-example.component.ts.txt';

import { Feature, Topic } from '../interfaces';
import { dataDisplay } from './dataDisplay';
import { fundamentals } from './fundamentals';

const unproccesedFeatures = [
  {
    title: 'signal',
    anchor: 'signal',
    description:
      'Este componente de Angular muestra un contador simple que puedes aumentar o disminuir haciendo clic en botones. Usa una nueva función llamada `signal`, que permite guardar y actualizar valores de forma reactiva (es decir, que la vista se actualiza automáticamente cuando cambia el valor). Por ejemplo, el valor del contador empieza en `0` y cambia cuando se presionan los botones. Además, se usa una opción llamada `OnPush` que hace que el componente sea más rápido, porque solo se actualiza cuando realmente cambian los datos.',
    component: SignalExampleComponent,
    files: [
      {
        code: singalExampleTsRaw,
        defaultIsOpen: true,
        lang: 'ts',
      },
      {
        code: singalExampleHtmlRaw,
        defaultIsOpen: false,
        lang: 'html',
      },
    ],
  },

  {},
];

const getFeatureListFromTopic = (topic: Topic): Feature[] => {
  return topic?.features.map((item) => {
    const showcases = item.showcases.map((showcase) => {
      const proccesedFiles = showcase?.files?.map((file) => {
        if (file.lang === 'ts') {
          return { ...file, name: `${showcase.anchor}-example.ts` };
        }
        if (file.lang === 'html') {
          return { ...file, name: `${showcase.anchor}-example.html` };
        }
        return {
          ...file,
        };
      });
      return {
        ...showcase,
        files: [...proccesedFiles],
      };
    });
    return {
      ...item,
      showcases: [...showcases],
    };
  });
};

export const features = {
  fundamentals: getFeatureListFromTopic(fundamentals),
  'data-display': getFeatureListFromTopic(dataDisplay),
};
