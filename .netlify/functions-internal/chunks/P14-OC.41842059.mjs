import { k as createVNode, F as Fragment, s as spreadAttributes } from './astro.c2cdbe23.mjs';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>La mission :<br>\nVous venez de commencer à travailler chez Remede Agency, une agence spécialisée dans le développement d’applications web. L’équipe est principalement composée de développeurs back-end et vient de commencer à recruter d’autres spécialistes front-end.<br>\nLe projet concerne une nouvelle banque qui démarre, Argent Bank, qui essaie de percer dans le secteur et qui a besoin d’aide pour mettre en place son application. Nous avons obtenu un contrat en deux parties qui se décompose en plusieurs phases :\n<br>\nPhase 1 : Authentification des utilisateurs - Création d’une application web permettant aux clients de se connecter et de gérer leurs comptes et leur profil.\n<br>\nPhase 2 : Transactions - Il s’agirait de spécifier les endpoints d’API nécessaires pour une éventuelle deuxième mission une fois que nous aurons terminé la première.</p>\n<p>Pour plus d’information sur la demande et la présentation de la solution technique, dépôt GITHUB : <a href=\"https://github.com/vypnico974/P13_OpenClassrooms_ArgentBank\">https://github.com/vypnico974/P13_OpenClassrooms_ArgentBank</a></p>");

				const frontmatter = {"title":"Projet 13 - OPENCLASSROOMS","publishDate":"2023-05-25 :00:00","img":"/assets/P13_1.png","img_alt":"Projet 13 - OPENCLASSROOMS.","description":"Utilisez une API pour un compte utilisateur bancaire avec React.","tags":["REACT","REDUX","SWAGGER"]};
				const file = "C:/Z_projet/Porfolio_astro/src/content/work/P14-OC.md";
				const url = undefined;
				function rawContent() {
					return "\nLa mission :<br>\nVous venez de commencer à travailler chez Remede Agency, une agence spécialisée dans le développement d'applications web. L'équipe est principalement composée de développeurs back-end et vient de commencer à recruter d'autres spécialistes front-end.<br>\nLe projet concerne une nouvelle banque qui démarre, Argent Bank, qui essaie de percer dans le secteur et qui a besoin d'aide pour mettre en place son application. Nous avons obtenu un contrat en deux parties qui se décompose en plusieurs phases :\n<br>\nPhase 1 : Authentification des utilisateurs - Création d'une application web permettant aux clients de se connecter et de gérer leurs comptes et leur profil.\n<br>\nPhase 2 : Transactions - Il s’agirait de spécifier les endpoints d’API nécessaires pour une éventuelle deuxième mission une fois que nous aurons terminé la première.\n\n\nPour plus d'information sur la demande et la présentation de la solution technique, dépôt GITHUB : https://github.com/vypnico974/P13_OpenClassrooms_ArgentBank\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
