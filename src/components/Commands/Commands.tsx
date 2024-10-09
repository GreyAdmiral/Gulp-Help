import styles from './Commands.module.scss';

const title = 'Команды' as const;

const commandsInfo = {
   dev: 'Запустить сборку в режиме разработки',
   build: 'Запустить сборку в режиме компилляции билда верстки',
   zip: 'Упаковать билд верстки в архив',
   ftp: 'Загрузить билд верстки по FTP  хостинг',
   deploy: 'Загрузить билд верстки на GitHub в ветку gh-pages',
   sprite: 'Сгенерировать из иконок svg-спрайт',
   fonts: 'Конвертировать шрифты в web-форматы',
   images: 'Конвертировать и оптимизировать всю графику',
   scss: 'Выболнить сборку и сжатие стилей',
   script: 'Выболнить сборку и сжатие скриптов',
   server: 'Запустить локальный сервер',
   imgwebp: 'Конвертировать графику в webp-формат',
   imgmin: 'Оптимизировать графику',
   fav: 'Создать фавиконку',
   valid: 'Проверить верстку на валидность',
   git: 'Создать файл .gitignore',
} as const;

const commands = Object.entries(commandsInfo);

export const Commands = () => {
   return (
      <section className={styles.commands}>
         <h2>{title}</h2>

         <ul className={styles.commandsList}>
            {commands.map(([command, info]) => (
               <li key={command} className={styles.commandsListItem}>
                  <code>{command}</code>
                  <span> — {info}</span>
               </li>
            ))}
         </ul>

         <p>
            <b>P.S.</b> Все команды запускаются через <code>npm{'\u00A0'}run</code>. Например:{' '}
            <code>
               npm{'\u00A0'}run{'\u00A0'}build
            </code>
            .
         </p>
      </section>
   );
};
