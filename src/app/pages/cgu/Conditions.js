import React from 'react'
import HeaderClient from '../cagnottes/HeaderClient'
import Footer from '../footer/Footer'
import { useEffect } from 'react';
import "./Conditions.css"

const Conditions = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>

            <HeaderClient />
            <div className='cgu'>
                <h1>Mentions légales & CGU</h1>

                <p>
                    Dénomination : OPALE ET COMPAGNIES. <br />
                    Siège social : Av. Kwango 131, Gombe Kinshasa.
                </p>
                <p>
                    Le site https://ligabloprod.com est hébergé par ionos dont le siège est situé au Business Centre, 1st
                    Floor Sqaq Lourdes, St Julians STJ3334, Malta.
                </p>
                <strong> LigabloProd est enregistré sous KNG/RCCM/22-B-01575 comme numéro RCCM.</strong>

                <hr />

                <p>Conclues entre :</p>
                <p>Le client, personne physique majeure capable, utilisant les services qui sont proposés sur
                    le Site https://ligabloprod.com, en son propre nom et / ou pour le compte d’une association,
                    ci-après dénommé « Vous » ou l’« Utilisateur », d’une part;</p>
                <p>
                    La société Opale et compagnie, immatriculée sous le numéro  et exploitant le site web accessible à l’adresse https://ligabloprod.com
                    (le « Site ligabloprod »), d’autre part ;
                </p>
                <p>Ci-après ensemble dénommées les « Parties ».</p>
                <strong>Acceptation des CGU :</strong>
                <p>
                    <strong>
                        Les présentes CGU constituent un contrat entre LiGABLOPROD et l’Utilisateur. Elles sont consultables à tout moment sur le Site LiGABLOPROD. L'Utilisateur peut à tout moment les
                        consulter, les reproduire, les stocker sur son ordinateur ou sur un autre support, se les envoyer
                        par courrier électronique ou les imprimer sur papier de manière à les conserver.
                    </strong>
                </p>
                <p>
                    <strong>
                        Le présent contrat doit être étudié avec soin par tout utilisateur souhaitant utiliser les services proposés
                        par le Site LigabloProd. A tout moment, s’il est en désaccord avec ce contrat, il doit immédiatement mettre fin à
                        l’utilisation du Site et des Services Ligabloprod. Dans la mesure où la loi l’autorise, la version anglaise de ces
                        Conditions de Service est contraignante et leurs traductions dans d’autres langues sont fournies à titre indicatif
                        uniquement ; en cas de divergence entre la version anglaise de ces Conditions de Service et leurs traductions, la
                        version anglaise prime.
                    </strong>
                </p>
                <hr />
                <ol>
                    <li style={{ color: "#009c4e" }}>
                        <strong>Définitions</strong>
                    </li>


                    <p>
                        <em> Bénéficiaire</em> : Ici, le bénéficiaire représente ligabloProd qui organise des cagnottes afin de produire
                        certains événements notamment des séries télévisées.
                    </p>

                    <p>
                        <em>Cagnotte ou Collecte</em> : désigne la cagnotte de fonds, initiée et organisée par un Utilisateur (l’Organisateur),
                        constituée dans le but de recevoir les Participations versées par les Participants et conservées par l’Emetteur avant le
                        retrait des fonds.
                    </p>
                    <p>
                        <em>Participant</em> : désigne l’internaute ayant versé une Participation à une cagnotte via le Site LiGABLOProd.
                    </p>
                    <p>
                        <em>Identifiants</em> : désigne l'adresse email valide renseignée par l'Utilisateur au moment de sa contribution et ses
                        noms, qui permettent d'accéder aux Services et fonctionnalités  de LiGABLOprod.
                    </p>
                    <p><em>Invité</em> : désigne le Participant qui a été invité par l’Organisateur à participer à la cagnotte.</p>

                    <p>
                        <em>Organisateur</em> : désigne l'Utilisateur qui a créé la cagnotte et invité des tiers à se joindre cette cagnotte.
                        Par défaut et sauf demande de virement bancaire au bénéfice d’un tiers, l’Organisateur est réputé être
                        le seul bénéficiaire des fonds collectés.
                    </p>
                    <p>
                        <em>Participation ou Don</em> : désigne le montant en numéraire versé par un Participant, au moyen d'un paiement
                        par mobiles money, réalisé en ligne via l’interface de LiGABLOProd. Le Participant a été invité à verser
                        sa Participation à une cagnotte via le Site, directement par sa désignation expresse par l’Organisateur
                        de la cagnotte, ou indirectement via un lien vers la cagnotte.
                    </p>
                    <p>
                        <em>Pourboire</em> : désigne, le montant que le Participant décide, le cas échéant, de verser à LiGABLOPROD
                        en plus, et qui n’est donc pas reversé à l'Organisateur.
                    </p>
                    <p>
                        <em>Retrait</em> : désigne l'opération par laquelle le montant correspondant au Solde rattaché à l'Utilisateur est
                        rétrocédé aux bénéficiaires désignés par l’Organisateur, sous forme de virement bancaire ; cette opération peut être
                        demandée par l’Organisateur uniquement.
                    </p>
                    <p>
                        <em>Service(s) Ligabloprod</em>: désigne l'ensemble des fonctionnalités accessibles depuis le Site Ligabloprod.
                    </p>
                    <p>
                        <em>Site Ligabloprod</em>: désigne le site Internet accessible depuis l'adresse https://ligabloprod.com, propriété
                        de la société OPALE.
                    </p>
                    <p>
                        <em>Solde</em> : désigne la valeur monétaire disponible dans le portefeuille d'un Utilisateur, c'est-à-dire la valeur
                        nominale des fonds apportés par les Participants aux cagnottes de cet Utilisateur, déduction faite de l'ensemble des
                        Retraits de fonds collectés effectuées par l'Utilisateur, et de l'ensemble des frais, taxes et commissions appliqués
                        aux transactions effectuées.
                    </p>
                    <p>
                        <em>Utilisateur</em> : désigne l'Organisateur inscrit sur le Site Ligabloprod et ayant fait usage d'au moins un des Services Ligabloprod.
                    </p>
                    <p>
                        <em>Visiteur</em> : désigne l’Internaute qui accède au Site Ligabloprod sans pour autant avoir créé un compte personnel.
                    </p>
                    <li style={{ color: "#009c4e" }}>
                        <strong>Objet et champs d'application</strong>
                    </li>
                    <p>
                        Ligabloprod propose un service de paiement permettant aux Organisateurs (un particulier, une entité ou une organisation à
                        but non lucratif) de collecter de l'argent en ligne et de mettre en commun des fonds en vue de les récupérer par virement
                        bancaire, dans le but de soutenir une cause, financer un projet ou de réaliser un évènement passé ou à venir.
                    </p>
                    <p>
                        Le présent contrat a pour objet de préciser les conditions dans lesquelles les Utilisateurs acceptent d'utiliser
                        le Site Ligabloprod et les Services Ligabloprod, ainsi que les relations contractuelles entre les Utilisateurs et Ligabloprod, et notamment
                        de définir les rôles et obligations de chacun et de fixer les modalités pécuniaires inhérentes à l'utilisation
                        des Services Ligabloprod.
                    </p>
                    <li style={{ color: "#009c4e" }}>
                        <strong> Modification des Conditions Générales d’Utilisation</strong>
                    </li>

                    <p>
                        Ligabloprod est en droit de modifier les présentes CGU à tout moment et publiera les CGU modifiées directement
                        sur le Site Ligabloprod (http://ligabloprod.com). Toute modification entrera alors en vigueur dès
                        sa publication par Ligabloprod sur le Site Ligabloprod.
                    </p>
                    <p>
                        Une utilisation continue de la part des Utilisateurs du Site Ligabloprod après la publication d'une
                        nouvelle version des CGU vaut consentement à cette nouvelle version.
                    </p>

                    <li style={{ color: "#009c4e" }}>
                        <strong>Relation entre Ligabloprod et les Utilisateurs</strong>
                    </li>
                    <p>
                        Ligabloprod ne saurait être tenue responsable de toute erreur, omission, interruption, suppression, de tout défaut, retard
                        d'opération ou de transmission, vol ou destruction ou accès non autorisé, ou encore de toute altération de la communication avec tout
                        Utilisateur. Ligabloprod ne garantit pas l'accès continu, ininterrompu à l'ensemble des Services Ligabloprod. En conséquence Ligabloprod ne
                        pourra pas être tenue pour responsable du retard et/ou de la non-accessibilité aux Services Ligabloprod ou au Site Ligabloprod rendant impossible
                        l'exécution d'un paiement ou en cas d'exécution partielle ou erronée, dès lors qu'ils résultent de facteurs échappant au contrôle raisonnable de Ligabloprod.
                    </p>
                    <p>
                        Ligabloprod se réserve le droit de suspendre temporairement l'accès aux Services Ligabloprod pour des raisons techniques ou
                        de maintenance sans que ces opérations n'ouvrent droit à une quelconque indemnité.
                    </p>
                    <p>
                        Ligabloprod ne garantit pas l'identité des Utilisateurs et Participants.
                    </p>
                    <p>
                        <em>Les Participations</em> : Toutes les Participations sont versés à vos propres risques. Lorsque vous faites un
                        Don sur la Plateforme, la responsabilité de comprendre la manière dont votre argent sera utilisé vous incombe.
                        Ligabloprod n’est pas responsable des promesses faites ou offertes par les Utilisateurs ou les Cagnottes; de tels
                        comportements violent les présentes Conditions de Service. Nous ne vérifions pas et nous ne sommes pas en mesure de
                        vérifier les informations que les Utilisateurs fournissent, et nous ne saurions déclarer ou garantir que les Dons
                        seront utilisés en conformité avec les objectifs de la Collecte tels que stipulés par un Utilisateur ou une Collecte
                        ou en conformité avec les lois applicables sauf mention contraire sur une Cagnotte désignée comme telle. Nonobstant ce
                        qui précède, nous prenons très au sérieux les activités potentiellement frauduleuses, ainsi que le détournement des fonds
                        levés. Si vous avez des raisons de croire qu’un Utilisateur ou une Collecte ne recueille pas ou n’utilise
                        pas les fonds aux fins déclarées, choisissez l'objet « Signaler une fraude » dans la page de contact pour
                        alerter notre équipe de ce problème potentiel, et nous lancerons une enquête.
                    </p>

                    <li>
                        <ol>
                            <li style={{ color: "#009c4e" }}>  Utilisation de la Cagnotte</li>
                        </ol>
                    </li>
                    <p>
                        L’Organisateur et les Participants ont la responsabilité de la bonne tenue des comptes, des décisions d'utilisation et des utilisations des fonds mis en
                        commun, des compensations et des remboursements, ainsi que des relations entre eux.
                    </p>
                    <p>
                        À l'occasion du versement d'une Participation, le Participant donne mandat à l’Organisateur, sous condition
                        suspensive et à concurrence du Retrait de la cagnotte, d'utiliser tout ou partie du montant de la Participation
                        aux fins convenues entre les Participants, et pour ceci de demander un virement bancaire.
                    </p>
                    <p>

                        Ligabloprod ne garantit pas la bonne exécution des utilisations de l'argent collecté par l’Organisateur.
                        En cas de litige concernant l'utilisation des fonds mis en commun par les Participants, ceux-ci doivent
                        s'adresser directement à l’Organisateur afin d'essayer de résoudre leur litige avec lui. En cas de litige
                        entre au moins deux Utilisateurs, ces derniers doivent s'efforcer de régler leur litige entre eux, Ligabloprod
                        ne pouvant intervenir à aucun titre dans cette relation.
                    </p>

                    <hr />

                    <li style={{ color: "#009c4e" }}>
                        <strong>Durée</strong>
                    </li>

                    <p>
                        Les CGU, dans leur présente rédaction ou dans leur rédaction modifiée le cas échéant par Ligabloprod,
                        resteront en vigueur pendant toute la durée de l'utilisation du Site Ligabloprod et/ou des Services
                        Ligabloprod par l'Utilisateur.
                    </p>
                    <li style={{ color: "#009c4e" }}>
                        <strong>Limites d’utilisation des services</strong>
                    </li>

                    <p>
                        Lors de sa contribution à une cagnotte sur le Site Ligabloprod, l'Utilisateur doit soumettre un
                        certain nombre de données personnelles, en particulier lorsqu'il désire être le bénéficiaire d'un
                        virement bancaire et lorsque les montants concernés imposent à Ligabloprod de s'assurer de son identité,
                        dans le cadre de la lutte contre le blanchiment d'argent et contre le financement du terrorisme et des
                        lois en vigueur.
                    </p>
                    <p>
                        Ligabloprod se réserve le droit de suspendre toute demande de virement initiée par un Utilisateur qui n’aurait pas satisfait à
                        la procédure d’identification, dans le cadre de la procédure telle que définie par les règles de lutte contre le blanchiment de capitaux
                        et contre le financement du terrorisme, comme dans le cadre d’une procédure ad hoc exigée par Ligabloprod notamment
                        en cas de soupçon de fraude ou de doute sur la conformité de l’Utilisation de son Service avec les présentes CGU.
                    </p>
                    <p>
                        À réception des documents exigés dans le formulaire d'inscription des services ou de la part des équipes de Ligabloprod,
                        sous
                        réserve qu’ils soient jugés satisfaisants par Ligabloprod, celui-ci pourra débloquer les limites applicables à l’User.
                    </p>
                    <p>
                        Il est expressément convenu entre les Parties que Ligabloprod pourra requérir, préalablement à la conclusion des présentes et
                        durant toute l’exécution du Contrat, tout document et justificatif nécessaires à l’identification du Bénéficiaire, des
                        Participants, à la vérification de leur identité et à la compréhension de l’Objet de la Cagnotte.
                    </p>
                    <li >
                        <strong style={{ color: "#009c4e" }}>Règles d’utilisation des cagnottes</strong>
                        <ol>
                            <li style={{ color: "#009c4e" }}>Création d’une cagnotte par un Utilisateur</li>

                            <p>
                                L’Organisateur doit être préalablement enregistré en qualité d’Utilisateur avant de créer une cagnotte. À chaque
                                demande de création de cagnotte, l’Organisateur fournira la totalité des champs exigés du formulaire d’enregistrement
                                des Services. Les données d’enregistrement et certaines autres informations vous concernant sont régies par les
                                présentes Conditions.
                            </p>

                            <p>
                                Une cagnotte n'est valide que si elle a fait l'objet de plusieurs Participations de Participants distincts.
                            </p>
                            <p>
                                Il appartient, à l’Organisateur, de déterminer l’ensemble de ces éléments, dans le strict respect de la loi
                                applicable, de l’ordre public et des bonnes mœurs. L’Organisateur déclare connaitre personnellement le Bénéficiaire.
                            </p>
                            <p>

                                L’Organisateur s’engage à s’assurer de l’identité et de la moralité des Participants choisis pour contribuer à
                                la cagnotte. Ligabloprod ne saurait à cet effet être tenu responsable des éventuelles erreurs sur l’identité des
                                Participant ou leurs qualités.
                            </p>
                            <p>
                                Toute indication inexacte ou trompeuse est susceptible d'engager la responsabilité de l’Organisateur à l'égard des
                                Participants et du Bénéficiaire. Ligabloprod étant étranger à la relation existante entre les Participants,
                                le Bénéficiaire et l’Organisateur, Ligabloprod ne saurait nullement être tenu responsables à ce titre.
                            </p>
                            <p>
                                L’Organisateur recevra une confirmation de la création de la cagnotte par email. Il reconnait que Ligabloprod
                                pourra, sans motivation, ni droit à indemnité, ne pas donner suite à une demande de création de cagnotte.
                            </p>
                            <p>
                                Ligabloprod se donne également le droit de clôturer une cagnotte sans donner de motivation.
                            </p>
                            <li style={{ color: "#009c4e" }}>
                                Gestion de la cagnotte par l'Organisateur
                            </li>
                        </ol>

                        <p>
                            L'Organisateur est seul responsable de l'administration de la cagnotte et peut effectuer une demande de virement
                            à tout moment.
                        </p>
                        <p>
                            L'Organisateur peut notamment choisir à tout moment : De réduire le Montant
                            Cible de la cagnotte ; D'augmenter le montant cible de cagnotte ; D'inviter
                            tout nouveau Participant ; De modifier la date de fin de cagnotte ; De clôturer la cagnotte.
                        </p>
                        <ul>
                            <li style={{ color: "#009c4e" }}>Participations à une cagnotte</li>
                        </ul>
                        <p>
                            Un Participant peut être invité par un Organisateur à verser une Participation dans la cagnotte
                            organisée par ce dernier.
                        </p>
                        <p>
                            La Participation peut être versée par Carte Bancaire en une seule fois via un versement ponctuel.
                            Le montant en numéraire versé par chaque Participant est collecté par le PSP pour une valeur nominale
                            équivalente et stockée sur la Cagnotte.
                        </p>
                        <p>
                            L'Organisateur est informé dans l'espace dédié de son compte de toute nouvelle Participation.
                        </p>
                        <p>
                            À l'occasion du versement d'une Participation, le Participant donne mandat à l'Organisateur, d'utiliser tout ou partie
                            du montant de la Participation pour les besoins exclusif du Bénéficiaire défini lors de la création de la cagnotte.
                        </p>
                        <p>
                            Si vous êtes un Donateur, constituée comme telle en vertu des lois applicables : Vous n’êtes pas habilité
                            à imposer des restrictions relatives à l’utilisation de cette Participation par l’Organisateur. Dans la mesure
                            où vous faites un Don, vous acceptez de ne pas établir de contrat d'utilisation de ce dernier avec l'Origanisateur.
                            Dans la mesure où vous prétendez déterminer l’utilisation des Dons de cette Association, ces directives constitueront
                            uniquement des recommandations non contraignantes et l’Organisateur pourra déterminer à son entière discrétion la façon
                            dont tous les Dons seront utilisés.
                        </p>
                        <ul>
                            <li style={{ color: "#009c4e" }}>Pourboire</li>
                        </ul>
                        <p>
                            Le site propose aux Participants lors de leur Participation, de verser un Pourboire à Le site. Le Pourboire est mentionné sur
                            la page de paiement, mais il n’est pas reversé à l'Organisateur.
                        </p>
                        <p>
                            Ligabloprod se rémunère sur la base de pourboires payés par les Participants et dont le montant
                            est librement fixé par eux.
                            L'Utilisateur ne doit sous aucune forme influencer, demander
                            ou exiger aux Participants de contribuer ou non à un pourboire.
                        </p>
                        <ul>
                            <li style={{ color: "#009c4e" }}>Rétractation d’un Participant</li>
                        </ul>
                        <p>
                            Indépendamment de ce qui précède, le Participant peut demander un remboursement de tout ou partie
                            de sa Participation (une « Rétractation ») sous 14 (quatorze) jours après la date de participation
                            et avant toute utilisation de la cagnotte. Une Rétractation est valablement demandée par email par
                            l'Organisateur en suivant ce lien. L'Organisateur doit indiquer la référence de la Participation
                            (reçue par email), dont il souhaite le Remboursement. En cas de Rétractation, l’Emetteur est immédiatement
                            informé du montant qui est réactualisé afin d’ajuster le montant en numéraire émise par lui au nom du ou des
                            Participants concernés.
                        </p>
                        <p>
                            L'Organisateur est le seul décisionnaire pour le remboursement d'un participant. Toute récupération
                            totale ou partielle de fonds par l'organisateur rendrait caduque la possibilité de remboursement de
                            la part de Ligabloprod. Un remboursement génère un ordre de crédit sur le même moyen de paiement utilisé
                            pour le règlement de la Participation dans un délai de 3 (trois) à 7 (sept) jours ouvrés suivants la
                            rétractation. Le remboursement sera effectif après déduction des frais bancaires de 1,9% + 0,30 cts par
                            transaction remboursée, ces frais n'étant pas remboursés par les processeurs de cartes bancaires.
                        </p>
                        <ul>
                            <li style={{ color: "#009c4e" }}> Annulation d’une cagnotte</li>
                        </ul>

                        <p>
                            Avant toute utilisation de la cagnotte, l’Organisateur peut notifier l’annulation de la création de la
                            cagnotte (une « Annulation »).
                        </p>
                        <p>
                            L'Utilisateur peut demander l'annulation d'une cagnotte ou la résiliation de son Compte. Pour cela,
                            il doit informer le service client en suivant ce lien. Après un délai de quinze (15) jours maximum,
                            la résiliation est effective. L'Utilisateur n'aura alors plus accès à son espace personnel et il ne
                            pourra plus administrer les cagnottes qu'il a créés.
                        </p>
                        <p>
                            En cas d’annulation, le service client procède à la notification de l’annulation à
                            l’ensemble des Participants concernés. Le montant de chaque Participation donne lieu à
                            remboursement au Participant concerné. Le remboursement sera effectif après déduction des frais
                            bancaires de 1,9% + 0,30 cts par transaction remboursée, ces frais n'étant pas remboursés par les
                            processeurs de cartes bancaires. L'Utilisateur peut demander le remboursement des participants sous
                            14 (quatorze) jours après la date de la première participation reçue et avant toute utilisation de
                            la cagnotte.
                        </p>
                        <ul>
                            <li style={{ color: "#009c4e" }}>Détention des fonds collectés</li>
                        </ul>

                        <p>
                            Le montant de la Participation est détenu, à due concurrence par le PSP jusqu'à la date d'une utilisation
                            par l'Organisateur ou d'Annulation de la cagnotte.
                        </p>
                        <p>
                            Conformément à la réglementation, les Remboursements par Annulation ou par Rétractation sont réalisés à
                            la valeur nominale de la Participation (commission comprise).
                        </p>

                        <ul>
                            <li style={{ color: "#009c4e" }}>Cagnottes inactives</li>
                        </ul>
                        <p>
                            Ligabloprod n'est pas un établissement bancaire et ne peut pas garder des fonds indéfiniment. C'est pourquoi des frais d'inactivité
                            sont débités sur les cagnottes avec un solde positif et n'ayant plus d'activité.
                        </p>
                        <p>
                            Une cagnotte est considérée comme inactive à l'issue d'une période de trois (3) mois au cours de laquelle
                            la cagnotte n'a fait l'objet d'aucune demande de Retrait.
                            Une cagnotte est également considérée comme inactive lorsque l'Organisateur ne donne pas suite aux
                            sollicitations de Ligabloprod en attente d'un document justificatif ou une information sollicitée qui
                            n’était pas transmis par l’Organisateur à Ligabloprod excédent une période de trois (3) mois.
                        </p>
                        <p>
                            Concernant les règles applicables sur les comptes inactifs, des frais à hauteur de 12 000 FC par mois
                            et par cagnotte seront prélevés sur le compte de l'utilisateur, en déduction du solde créditeur à
                            partir de la date de la dernière demande de Retrait. Au-delà de 12 mois d’inactivité, ces
                            frais passent à 6,90 € + 8% par mois.
                        </p>
                        <p>
                            En cas de nouveau Retrait ou de solde nul, les frais d'inactivités sont interrompus.
                            Une cagnotte est automatiquement clôturée si elle n’a pas reçu de nouvelle participation durant les
                            trente (30) derniers jours.
                        </p>
                        <ul>
                            <li style={{ color: "#009c4e" }}>Modalités d’utilisation d’une cagnotte</li>
                        </ul>

                        <p>
                            L'Organisateur est responsable de l'utilisation de la cagnotte dans le cadre du mandat donné par les Participants lors
                            du versement de leurs Participations.
                        </p>
                        <p>
                            L’Organisateur peut décider de procéder au Retrait de tout ou partie du montant en numéraire inscrite sur une cagnotte. Une cagnotte est valide que si elle a fait l'objet d'au moins deux (2) Participations de Participants distincts. L'Organisateur ne peut donc retirer les fonds avec une seule (1) participation ou un seul participant.
                            Lorsqu’il souhaite effectuer un Retrait, l’Organisateur de la cagnotte :
                        </p>
                        <ul>
                            <li>
                                procède à son identification sur le Site Ligabloprod en indiquant son Identifiant (adresse mail valide) et son mot de passe.
                            </li>
                            <li>
                                remplit le formulaire de demande de Retrait dans la section adéquate et communique le cas échéant les pièces
                                justificatives demandées par l’Emetteur.
                            </li>
                        </ul>
                        <p>
                            La demande de Retrait devient irrévocable, lorsque l’Utilisateur clique sur l’onglet de validation du formulaire.
                        </p>
                        <p>
                            Le Retrait ainsi que l’utilisation des fonds correspondant sont réalisés sous la responsabilité exclusive de l’Organisateur qui
                            s’oblige, à se conformer au mandat qui lui a été donné par les Participants à la cagnotte.
                        </p>
                        <p>
                            Les autres Parties au Contrat ne sauraient être tenues responsables envers les Participants des éventuels
                            manquements et fautes commises par l’Organisateur dans le cadre de ce mandat.
                        </p>
                        <p>
                            Ligabloprod procèdera à l’opération de Retrait suivant la validation du formulaire sous 2 jours ouvrés.
                        </p>
                        <p>
                            Lorsque l'Organisateur décide de procéder au Retrait total ou partiel du montant en numéraire de la cagnotte, des frais de rupture et de gestion seront applicables conformément aux présentes, et viendront en déduction de la somme versée au titre du Retrait. Ces frais s'élèvent à 1,9% + 0,30 cts FC par participation reçue au titre de frais bancaires.
                            Le montant des Retraits vient s’imputer sur le montant en numéraire de la cagnotte.
                        </p>
                    </li>
                    <li style={{ color: "#009c4e" }}>
                        <strong>Limitations de responsabilité</strong>
                    </li>
                    <p>

                        Sans limiter la portée des autres dispositions de ce contrat, l'Utilisateur convient que Ligabloprod ne
                        sera pas responsable envers lui ou envers des tiers sur le fondement de la responsabilité contractuelle,
                        délictuelle, et sur le fondement de la responsabilité civile pour des faits involontaires ou autre, pour
                        des pertes, préjudices résultant de, mais non limités à :
                    </p>
                    <ul>
                        <li>
                            n'importe quelle perte née de son utilisation du site, y compris le cas échéant,
                            les pertes ou dommages concernant la perte de chiffre d'affaires, le manque à gagner,
                            l'interruption d'affaires, la perte d'informations commerciales, ou autres pertes;
                        </li>

                        <li>
                            toutes pertes ou dommages résultant directement ou indirectement de son utilisation de tout lien à
                            tout site Web contenu sur le site;
                        </li>

                        <li>
                            tous retards ou interruptions du service, erreurs dans l’information ou les services fournis
                            (comme l'entrée et la transmission des données), toute perte ou corruption des données ou les
                            échecs de communication ou des lignes, toute transmission accidentelle des virus ou d'autres agents nocifs,
                            toute utilisation non autorisée ou abusive de son Compte, ou tous faits de force majeure.
                        </li>
                    </ul>
                    <p>

                        L'Utilisateur convient que la responsabilité globale totale de la société Ligabloprod, si elle est encourue,
                        quelle que soit la cause ou la forme de l'action, ne peut pas dépasser la somme de trois cents 200 000fc.
                    </p>
                    <p>
                        Ligabloprod ne pourra être tenue pour responsable d'un événement qui la dépasse (incluant, mais ne se limitant pas,
                        les catastrophes naturelles, les coupures de courant ou les grèves), ou des préjudices subis en conséquence
                        d'une erreur sur la confidentialité des données personnelles.
                    </p>
                    <li style={{ color: "#009c4e" }}>
                        <strong> Engagements de l’Utilisateur</strong>
                    </li>
                    <p>
                        L’Utilisateur garantit qu’aucun élément de son profil sur le Site Ligabloprod ne porte atteinte aux droits de tiers ni n'est contraire à la loi, à l’ordre public et aux bonnes mœurs.
                        Il s’engage à ne pas
                    </p>
                    <ul>
                        <li>
                            Exécuter le Contrat d’une manière illégale ou dans des conditions susceptibles d'endommager, de désactiver,
                            de surcharger ou d'altérer le Site ;
                        </li>
                        <li>
                            Utiliser des scripts automatiques en vue de collecter des informations à partir du Site Ligabloprod,
                            ni à interagir avec le Site Ligabloprod;
                        </li>
                        <li>
                            Diffuser, publier, ou stocker sur le Site Ligabloprod un contenu illégal ou contraire à
                            l’ordre public et aux bonnes mœurs ;
                        </li>
                        <li>
                            Usurper l'identité d'une autre personne ou entité, falsifier ou dissimuler son identité,
                            son âge ou créer une fausse identité quelconque ;
                        </li>
                        <li>
                            Diffuser des données ou informations personnelles relatives à un tiers, telles
                            que des adresses postales, numéros de téléphone, adresses électroniques, numéros de cartes bancaire, etc. ;
                        </li>
                    </ul>
                </ol>
            </div>
            <Footer />
        </>
    )
}

export default Conditions