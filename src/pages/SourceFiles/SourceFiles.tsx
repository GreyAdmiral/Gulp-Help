import { useEffect } from 'react';
import { AppTitle, SourceFilesSection } from '@components/index';

const documentTitle = 'Ресурсы' as const;

const imagesTitle = 'Растровая графика' as const;
const svgTitle = 'Векторная графика' as const;
const webpTitle = 'Конвертация графики' as const;
const miniTitle = 'Сжатие графики' as const;
const spritesTitle = 'SVG-спрайты' as const;
const favIconTitle = 'Фавиконка' as const;
const fontsTitle = 'Шрифты' as const;
const gitTitle = 'Файл .gitignore' as const;
const vendorTitle = 'Папка vendor' as const;

export const SourceFiles = () => {
   useEffect(() => {
      document.title = `Шпаргалка по Gulp | ${documentTitle}`;
   }, []);

   return (
      <>
         <AppTitle>Используемые файлы</AppTitle>

         <SourceFilesSection>
            В сборке существуют инструменты для обработки исходных файлов и конвертации их в нужный для билда проекта
            формат. Большинство задач для работы с этими инструментами можно запустить «вручную», набрав в консоли
            соответствующую команду.
         </SourceFilesSection>

         <SourceFilesSection title={imagesTitle}>
            Чтобы добавить в проект графический файл в растровом формате его нужно положить в папку{' '}
            <code>images/pixels</code>. При запуске сборки, либо если сборка уже запущена, добавка произойдет
            автоматически. При сборке билда проекта все содержащиеся в папке <code>images/pixels</code> графические
            файлы растрового формата будут сжаты, сконвертированы в формат <code>webp</code> и добавлены в билд проекта,
            в папку <code>images</code>.
         </SourceFilesSection>

         <SourceFilesSection title={svgTitle}>
            Чтобы добавить в проект графический файл в векторном формате его нужно положить в папку{' '}
            <code>images/vector</code>. При запуске сборки, либо если сборка уже запущена, добавка произойдет
            автоматически. При сборке билда проекта все содержащиеся в папке <code>images/vector</code> графические
            файлы векторного формата будут добавлены в билд проекта, в папку <code>images</code>.
         </SourceFilesSection>

         <SourceFilesSection title={webpTitle}>
            Чтобы отдельно сконвертировать графические файлы растрового формата (не <code>webp</code>) в формат{' '}
            <code>webp</code> их нужно положить в папку <code>images/pixels</code> и набрать в консоли соответствующую
            команду. В результате в папке с билдом будет создана папка <code>images</code> с графическими файлами в
            формате <code>webp</code>.
         </SourceFilesSection>

         <SourceFilesSection title={miniTitle}>
            Чтобы отдельно сжать графические файлы растрового формата их нужно положить в папку{' '}
            <code>images/pixels</code> и набрать в консоли соответствующую команду. В результате в папке с билдом будет
            создана папка <code>images</code> со сжатыми графическими файлами.
         </SourceFilesSection>

         <SourceFilesSection title={spritesTitle}>
            Чтобы собрать спрайт из svg-иконок нужно положить их в папку <code>images/sprite</code> и набрать в консоли
            соответствующую команду. В результате в папке с билдом будет создана папка <code>images</code> с файлами{' '}
            <code>icons.svg</code> и <code>icons-stack.svg</code> Файлы созданы разными способами, но абсолютно
            равнозначны и содержат один и тот же набор иконок. Пользователю сборки предлагается сделать выбор на свой
            вкус.
         </SourceFilesSection>

         <SourceFilesSection title={fontsTitle}>
            Чтобы сгенерировать файлы шрифтов нужно положить в папку <code>fonts</code> файлы шрифтов в формате «
            <code>TrueType</code>» или же «<code>OpenType</code>» и набрать в консоли соответствующую команду. В
            результате в папке с билдом будет создана папка <code>fonts</code> с файлами шрифтов в 2-х вариантах
            web-формата «<code>Web Open Font Format</code>».
         </SourceFilesSection>

         <SourceFilesSection title={favIconTitle}>
            Чтобы сгенерировать фавиконку для проекта нужно положить в папку <code>src</code> графический файл с
            названием <code>favicon</code> и набрать в консоли соответствующую команду. В результате в папке для билда
            будут созданы файлы и папки необходимые для наличия фавиконки на различных устройствах.
         </SourceFilesSection>

         <SourceFilesSection title={gitTitle}>
            Чтобы сгенерировать файл <code>.gitignore</code> для данной сборки достаточно набрать в консоли
            соответствующую команду. В результате, в случае отсутствия такового, в папке со сборкой будет сгенерирован
            файл <code>.gitignore</code>, содержащий все необходимые для данной сборки исключения. Если в папке со
            сборкой такой файл уже есть новый файл <code>.gitignore</code> генерироваться не будет. При запуске сборки
            эта задача будет выполнена автоматически. При добавке в сборку других элементов, нуждающихся в регистрации в
            файле <code>.gitignore</code>, их предлагается внести в данный файл вручную.
         </SourceFilesSection>

         <SourceFilesSection title={vendorTitle}>
            При наличии файлов в любой из подпапок папки <code>vendor</code> эта подпапка с файлами будет полностью
            скопирована в папку с билдом проекта. В папке <code>vendor/files</code> файлы могут быть любыми, во всех
            остальных типы файлов должны соответствовать названию своей папки, то есть в папке <code>vendor/css</code>{' '}
            должны лежать только файлы со стилями, в папке <code>vendor/js</code> — только файлы со скриптами и т.д. Все
            файлы будут копироваться без какой либо обработки и слияния.
         </SourceFilesSection>

         <SourceFilesSection separator={true}>
            Папка <code>gulp</code> содержит в себе папки <code>config</code> и <code>tasks</code>, а так же файл{' '}
            <code>version.json</code>. Файл <code>version.json</code> содержит в себе версию сборки. Папка{' '}
            <code>config</code> содержит в себе файл <code>path.js</code>, в котором содержатся основные пути сборки,
            файл <code>plugins.js</code>, в котором лежит часть плагинов и файл <code>ftp.js</code>, в который (при
            необходимости) предлагается вписать реквизиты для ftp-доступа к хостингу (иначе задача выгрузки билда на
            хостинг через ftp работать не будет). В папке <code>tasks</code> лежат скрипты задач сборки.{' '}
            <b>
               Любые изменения в скрипты из папки <code>gulp</code> рекомендуется вносить только при полном понимании
               своих действий!!!
            </b>
         </SourceFilesSection>
      </>
   );
};
