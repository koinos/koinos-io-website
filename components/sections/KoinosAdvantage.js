import { useTranslations } from 'next-intl';

export default function KoinosAdvantage() {
  const t = useTranslations('KoinosAdvantage');

  const items = [
    {
      title: t('items.feeless.title'),
      description: t('items.feeless.description'),
      icon: "/images/sections/koinos-advantage/feeless.png",
    },
    {
      title: t('items.web2.title'),
      description: t('items.web2.description'),
      icon: "/images/sections/koinos-advantage/web2.png",
    },
    {
      title: t('items.upgradeable.title'),
      description: t('items.upgradeable.description'),
      icon: "/images/sections/koinos-advantage/upgradeable.png",
    },
    {
      title: t('items.fast.title'),
      description: t('items.fast.description'),
      icon: "/images/sections/koinos-advantage/fast.png",
    },
    {
      title: t('items.microservices.title'),
      description: t('items.microservices.description'),
      icon: "/images/sections/koinos-advantage/microservices.png",
    },
    {
      title: t('items.universal.title'),
      description: t('items.universal.description'),
      icon: "/images/sections/koinos-advantage/universal.png",
    },
  ];

  return (
    <>
      <section id="features" className="py-100 features-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
              <div className="section-title mb-80 py-4">
                {/* Title */}
                <h2 className="s-50 w-700">{t('title')}</h2>
                {/* Text */}
                <p className="s-21 color--grey">{t('subtitle')}</p>
              </div>
            </div>
          </div>
          {/* FEATURES-11 WRAPPER */}
          <div className="fbox-wrapper">
            <div className="row row-cols-1 row-cols-md-2 rows-3">
              {items.map((item) => (
                <div key={item.title} className="col">
                  <div className="fbox-11 fb-1 wow" data-aos='fade-up'>
                    {/* Icon */}
                    <div className="fbox-ico-wrap">
                      <div className="fbox-ico ico-60">
                        <div className="shape-ico color--theme">
                          <img src={item.icon} alt="feature-icon" />
                        </div>
                      </div>
                    </div>
                    {/* Text */}
                    <div className="fbox-txt">
                      <h6 className="s-22 w-700">{item.title}</h6>
                      <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
