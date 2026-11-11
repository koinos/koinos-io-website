# Ecosystem source availability

Checked on 2026-11-08 for the ecosystem risk notices.

## Criteria

Checked public project pages, public GitHub/GitLab repository listings, root
source directories, and relevant READMEs. No code audit, deployment/source
comparison, wallet connection, or transaction was performed. Public source does
not establish security. Not finding a repository does not prove closed source.

Cards share translated notices selected by the optional `sourceCodeStatus`:

- `unavailable`: source unavailable according to the requester.
- `partial`: public components located; complete application source not verified.
- `unverified`: no public application-source repository could be verified.
- Other cards have public application source located below and no such notice.

## Directory review

| Application | Finding | Public evidence |
| --- | --- | --- |
| KoinDX | Partial: contracts and SDK public; complete web-app source not verified | [Repositories](https://github.com/orgs/koindx/repositories), [contracts](https://github.com/koindx/v2-core), [SDK](https://github.com/koindx/v2-sdk) |
| KoinFlow | Unavailable, as stated by requester | [Application](https://koinflow.netlify.app/); no source repository linked on inspected homepage |
| Trade Koinos | Application and contract source located | [Repository](https://github.com/therexdev/Token-Trading): frontend and contract directories |
| Kollection | Partial: marketplace contracts public; complete web-app source not verified | [Repositories](https://github.com/orgs/kollection-nft/repositories), [marketplace contracts](https://github.com/kollection-nft/marketplace): AssemblyScript source |
| OURO | Application and contract source located | [Repository](https://github.com/therexdev/marketplace): server, public, contracts |
| Aurvania | Public application-source repository not verified | [Application](https://aurvania.quest/) redirects to aurvania.com; homepage and GitHub search did not establish a source repository |
| Discover Koinos | Application source located | [Repository](https://github.com/therexdev/discover-koinos): server, public, contracts |
| Use Koinos Wallet | Application source located | [Repository](https://github.com/therexdev/discover-koinos): public/wallet.html and JavaScript assets |
| NFT Studio | Application source located | [Repository](https://github.com/therexdev/discover-koinos): public/nft.html and JavaScript assets |
| Token Lab | Application source located | [Repository](https://github.com/therexdev/discover-koinos): public/token.html and JavaScript assets |
| Koinos AI | Application source located | [Repository](https://github.com/therexdev/kaiapp): core, server, electron, ui |
| Fogata | Partial for the current v2 listing; interface source public, v2 contract source not verified (2026-11-11) | [Current interface](https://github.com/Armana-group/koinscan), [Fogata 2 guide](https://www.koinscan.com/fogata/help); its Armana-group/fogata2 contract link returned HTTP 404. [Fogata 1 contracts](https://github.com/joticajulian/fogata) and [older interface](https://github.com/tenonedesign/fogata-ui) are separate legacy sources |
| BurnKoin | Contract and interface source located | [Contracts](https://github.com/lukemwillis/koinos-burn-pool), [interface](https://github.com/lukemwillis/koinos-burn-pool-ui); both linked from burnkoin.com |
| Koinos Blocks | Explorer source located | [Original GitLab project](https://gitlab.com/engrave/koinos/koinosblocks), [GitHub copy](https://github.com/joticajulian/koinosblocks) with development instructions and original registry link |
| Koinos One | Application source located | [Repository](https://github.com/koinos/koinos-one): backend, electron, node |
| KoinosKit | Application source located | [Repository](https://github.com/therexdev/Koinos-Node): electron, ui |
| Teleno | Application source located | [Repository](https://github.com/koinos/teleno): src, tests |
| Koin Crew | Public application-source repository not verified | [Application](https://koincrew.com/), [public GitHub account](https://github.com/koincrew); the located token list is not the application source |
| Koinosscan | Partial: public data adapter; complete explorer source not verified | [Repository and README](https://github.com/interfecto/koinosscan) list koindx-gt-adapter |
| VortexBridge | Interface, validator and contract source located | [Public repositories](https://github.com/orgs/VortexBridge/repositories): koinos-bridge-ui, interface-bridge, koinos-bridge-validator and contract repositories |
| Koinscan | Application source located | [Repository](https://github.com/Armana-group/koinscan): src/app, components, koinos; linked by the app's feedback destination |

## Maintenance

Recheck evidence when source availability changes and refine/remove notices as
appropriate. Token lists, ABIs, and GitHub profiles alone are insufficient to
establish application-source availability. This inventory does not certify
complete source publication, deployed-source parity, licensing, or security.

## Implementation validation

- `npm run build` and `git diff --check` passed on the isolated PR branch.
- Generated English and Spanish HTML was checked across all 21 directory cards:
  exactly six notices render with the intended qualification; the other 15 do
  not receive this source-availability notice.
- The previous statement about our inability to audit is absent from the cards.
- Native Chrome checks confirmed the separate notice paragraphs in Spanish at
  desktop and 390px mobile width, without visible horizontal clipping.

