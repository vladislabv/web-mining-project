# web-mining-project
This repo serves for a team project using web-mining techniques. The project consists of an ETL Pipeline and analysis section

# IDEAS

* Crime-Statistiken
    - Visualisierung: Live Map basierend auf die Daten über Täten (etw. Ort, Zeit und ggf. zusätzliche Daten)
    - Analysen: Aufgrund von Daten, örtliche | zeitliche Analysen
    - Datenquellen: ???

* Preisvergleich
    - Visualisierung: diverse Grafiken zu Preisfluktuationen, Trends
    - Produkt: 
        - Website mit Visualisierungen & Analysen (auf laufenenden Daten)
        - User-interaktiv
        - Eingabe von Ware und Vergleich von Preisen auf verschiedenen Plattformen (Amazon, Ebay)
        - Entwicklung von einem simplen Algorithm zur Produktempfehlung zu dem User, bzw. anzeigen von nicht-default Metriken, um den Benutzern die Entscheidung zu erleichtern
    - Datenquellen: Market APIs with free access or WebScraping

* Social Media Analysis
    - Analysis:
        1. Analysis of popular niche influencers' content strategy
            - Using the social media API, track the posts and engagement metrics of top N influencers;
            - Perform a topic modeling analysis using NLP techniques to identify the key topics and themes that these influencers are posting about;
            - Cluster the influencers based on their content strategy and identify the most effective strategy that generates the most engagement.
        2. Sentiment analysis of niche brands'/companies' social media mentions
            - Using the Facebook API, track the mentions of top 10 brands on social media;
            - Perform sentiment analysis on the mentions to identify the overall sentiment towards the brand;
            - Use the results to identify areas for improvement in the brand's social media strategy.
        3. Analysis of popular niche hashtags
            - Using the Instagram API, track the usage and engagement metrics of the top 10 travel hashtags;
            - Perform a clustering analysis to identify the most effective types of hashtags in terms of generating engagement.
    - Implementation:
        1. Popular niche influencers' analysis
            - Collect data on top N niche influencers' posts and engagement metrics using public data from API;
            - Perform topic modeling analysis using NLP techniques to identify the key topics and themes in their posts;
            - Cluster the influencers based on their content strategy using K-means clustering;
            - Analyze the clusters to identify the most effective strategy that generates the most engagement.
        2. Sentiment analysis of niche brands'/companies' social media mentions
            - Collect data on top N brands' social media mentions using social media APIs;
            - Perform sentiment analysis using NLP techniques to identify the overall sentiment towards the brand;
            - Analyze the results to identify areas for improvement in the brand's social media strategy.
        3. Niche hashtags analysis
            - Collect data on the usage and engagement metrics of top N niche hashtags using API;
            - Perform clustering analysis using K-means clustering to identify the most effective types of hashtags in terms of generating engagement;
            - Analyze the results to identify the most effective types of hashtags and use them to inform social media strategy.
    
    - Options to choose:
        - Product 1: Perform templates for the topic analysis, user provides niche, N, influencer id, brand names and gets the analysis in a report form. (ML models should be pretrained) - Analysis lack historical data.
        - Product 2: Choose 1 niche and perform analysing by including historical data. The scope of analysis in this case can be extended.
        - Form of a product: GUI interface (Y/N) or package.

    - Data: Social Media offering free tier APIs / minimal WebScraping techniques.
    - Data Structure (public data of post or page/user):
        - Page (followers, following, bio)
        - Post (publishing date, lifetime impressions & engagements (likes, shares), sometimes Meta Info like MessageText or comments/share texts) - Set time window to lookup lifetime values and get time bounded measurements