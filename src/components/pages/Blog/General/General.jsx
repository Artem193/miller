import { useTranslation } from "react-i18next";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./general.scss";

export const General = () => {
  const { t, i18n } = useTranslation();

  const articles = useMemo(
    () => [
      { id: 1, path: "/PensionInsurance", category: "pension" },
      { id: 2, path: "/CarInsurancePersonal", category: "car" },
      { id: 3, path: "/ActuarialDeficit", category: "pension" },
      { id: 4, path: "/SavingMoney", category: "invest" },
      { id: 5, path: "/InvestmentTips", category: "invest" },
      { id: 6, path: "/InvestmentStrategyGuide", category: "invest" },
      { id: 7, path: "/StrategyQuestionnaire", category: "invest" },
      { id: 8, path: "/InvestmentRiskExplainer", category: "invest" },
      { id: 9, path: "/InvestorRiskProfile", category: "invest" },
      { id: 10, path: "/LiquidityImportance", category: "invest" },
      { id: 11, path: "/AssetManagement", category: "invest" },
      { id: 12, path: "/ServicePricingCard", category: "invest" },
      { id: 13, path: "/PhoenixInvest", category: "invest" },
      { id: 14, path: "/InvestmentPhilosophy", category: "invest" },
      { id: 15, path: "/PregnancyHealthInsurance", category: "healthy" },
      { id: 16, path: "/ChildHealthInsurance", category: "healthy" },
      { id: 17, path: "/PensionPlanningOverview", category: "pension" },
      { id: 18, path: "/TransplantCoverage", category: "healthy" },
      { id: 19, path: "/InsurancePayoutsIsrael", category: "customerSupport" },
      { id: 20, path: "/CriticalIllnessStats", category: "healthy" },
      { id: 21, path: "/AbroadSurgeryCoverage", category: "healthy" },
      { id: 22, path: "/OutsideBasket", category: "healthy" },
      { id: 23, path: "/LifeInsurancePayoutTypes", category: "life" },
      { id: 24, path: "/CancerCoverageConditions", category: "healthy" },
    ],
    []
  );

  useEffect(() => {
    document.body.setAttribute("dir", i18n.language === "he" ? "rtl" : "ltr");
  }, [i18n.language]);

  const [activeCategory, setActiveCategory] = useState("all"); 

  const filteredArticles = useMemo(() => {
    if (activeCategory === "all") return articles;
    return articles.filter((a) => a.category === activeCategory);
  }, [articles, activeCategory]);

  const gridRef = useRef(null);

  const [columns, setColumns] = useState(1);
  const rowsPerClick = 2;

  const calcColumns = () => {
    const el = gridRef.current;
    if (!el) return 1;

    const computed = window.getComputedStyle(el);
    const template = computed.getPropertyValue("grid-template-columns");

    const cols = template.split(" ").filter(Boolean).length;
    return Math.max(1, cols);
  };

  useLayoutEffect(() => {
    const update = () => setColumns(calcColumns());

    update();

    const ro = new ResizeObserver(() => update());
    if (gridRef.current) ro.observe(gridRef.current);

    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const initialVisible = columns * rowsPerClick;
  const step = columns * rowsPerClick;

  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setVisibleCount(Math.min(initialVisible, filteredArticles.length));
  }, [activeCategory, columns, initialVisible, filteredArticles.length]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const canShowMore = visibleCount < filteredArticles.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + step, filteredArticles.length));
  };

  return (
    <section className="general container">
      <h1 className="general__title">{t("blog.general.title")}</h1>

      <div className="general__filters">
        <button
          type="button"
          className={`general__filter ${activeCategory === "all" ? "is-active" : ""}`}
          onClick={() => setActiveCategory("all")}
        >
          {t("blog.filters.all")}
        </button>

        <button
          type="button"
          className={`general__filter ${activeCategory === "invest" ? "is-active" : ""}`}
          onClick={() => setActiveCategory("invest")}
        >
          {t("blog.filters.invest")}
        </button>

        <button
          type="button"
          className={`general__filter ${activeCategory === "healthy" ? "is-active" : ""}`}
          onClick={() => setActiveCategory("healthy")}
        >
          {t("blog.filters.healthy")}
        </button>

        <button
          type="button"
          className={`general__filter ${activeCategory === "life" ? "is-active" : ""}`}
          onClick={() => setActiveCategory("life")}
        >
          {t("blog.filters.life")}
        </button>

        <button
          type="button"
          className={`general__filter ${activeCategory === "customerSupport" ? "is-active" : ""}`}
          onClick={() => setActiveCategory("customerSupport")}
        >
          {t("blog.filters.customerSupport")}
        </button>

        <button
          type="button"
          className={`general__filter ${activeCategory === "car" ? "is-active" : ""}`}
          onClick={() => setActiveCategory("car")}
        >
          {t("blog.filters.car")}
        </button>

        <button
          type="button"
          className={`general__filter ${activeCategory === "pension" ? "is-active" : ""}`}
          onClick={() => setActiveCategory("pension")}
        >
          {t("blog.filters.pension")}
        </button>
      </div>

      <div className="general__articles" ref={gridRef}>
        {visibleArticles.map((article) => (
          <Link to={article.path} key={article.id} className="general__link">
            <div className="general__preview">
              <img
                src={`pages/blog/previews/img${article.id}.webp`}
                alt="preview"
                className="general__img"
                loading="lazy"
              />
              <p className="general__text">{t(`blog.general.text${article.id}`)}</p>
            </div>
          </Link>
        ))}
      </div>

      {canShowMore && (
        <button type="button" className="general__more" onClick={handleShowMore}>
          {t("blog.general.showMore")}
        </button>
      )}
    </section>
  );
};
