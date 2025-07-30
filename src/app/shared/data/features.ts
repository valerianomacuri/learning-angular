import { AppConfig } from '../../../config/app.config';
import { Feature, Topic } from '../interfaces';
import { dataDisplay } from './dataDisplay';
import { fundamentals } from './fundamentals';
import { localState } from './localState';

const getFeatureListFromTopic = (topic: Topic): Feature[] => {
  return topic?.features.map((item) => {
    const showcases = item.showcases.map((showcase) => {
      const proccesedFiles = showcase?.files?.map((file) => {
        if (file.lang === 'ts') {
          const name = `${showcase.anchor}-example.component.ts`;
          const codePath = `${AppConfig.paths.examples.base}/${showcase.anchor}-example/${name}.txt`;
          return { ...file, name, codePath };
        }

        if (file.lang === 'html') {
          const name = `${showcase.anchor}-example.component.html`;
          const codePath = `${AppConfig.paths.examples.base}/${showcase.anchor}-example/${name}`;
          return { ...file, name: `${showcase.anchor}-example.html`, codePath };
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
  [AppConfig.paths.fundamentals]: getFeatureListFromTopic(fundamentals),
  [AppConfig.paths.localState]: getFeatureListFromTopic(localState),
  [AppConfig.paths.dataDisplay]: getFeatureListFromTopic(dataDisplay),
};
