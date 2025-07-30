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
  [AppConfig.paths.fundamentals]: getFeatureListFromTopic(fundamentals),
  [AppConfig.paths.localState]: getFeatureListFromTopic(localState),
  [AppConfig.paths.dataDisplay]: getFeatureListFromTopic(dataDisplay),
};
