import { AppConfig } from '../../../config/app.config';
import { Feature, Topic } from '../interfaces';
import { componentsCommunication } from './componentsCommunication';
import { dataDisplay } from './dataDisplay';
import { fundamentals } from './fundamentals';
import { localState } from './localState';

const getFeatureListFromTopic = (topic: Topic): Feature[] => {
  return topic?.features.map((item) => {
    const showcases = item.showcases.map((showcase) => {
      const proccesedFiles = showcase?.files?.map((file) => {
        const lang = file.lang;
        if (lang === 'ts') {
          const name = `${showcase.anchor}-example.component.${lang}`;
          const codePath = `${AppConfig.paths.examples.base}/${showcase.anchor}-example/${name}.txt`;
          return { ...file, name, codePath };
        }
        const name = `${showcase.anchor}-example.component.${lang}`;
        const codePath = `${AppConfig.paths.examples.base}/${showcase.anchor}-example/${name}`;
        return {
          ...file,
          name: `${showcase.anchor}-example.${lang}`,
          codePath,
        };
      });
      const descriptionPath =
        AppConfig.paths.docs.base + `/${showcase.anchor}.md`;
      return {
        ...showcase,
        descriptionPath,
        files: [...proccesedFiles],
      };
    });
    return {
      ...item,
      showcases: [...showcases],
    };
  });
};

export const baseFeatures = {
  [AppConfig.paths.fundamentals]: getFeatureListFromTopic(fundamentals),
  [AppConfig.paths.localState]: getFeatureListFromTopic(localState),
  [AppConfig.paths.dataDisplay]: getFeatureListFromTopic(dataDisplay),
  [AppConfig.paths.communication]: getFeatureListFromTopic(
    componentsCommunication
  ),
};
