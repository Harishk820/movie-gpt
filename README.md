# Movie gpt

-Create react app
-configured tailwind css
-header
-login form
-sign Up form
-form Validation
-useRef Hook
-firebase setup
-deploying project to production
-create signUp user account

-implement sign in user api
-Created Redux Store with userSlice
-implemented signOut feature
-Update profile

- fetch movies from TMDB movies
  -Bug Fixed
  -sign Up display name and avtar
  -if the user is not logged in redirect to /Browse to login page and vice versa
  -Unsubscribed to onAuthStateChanged callback
  -Created constants file(for hard coded values)
  -Registered TMDB api, created app and got access token
  -Got data from TMDB Now playing list API

-custom Hook for Now playing movies
-created movieSlice
-updated the store with movies data
-main container and secondary container
-custom Hook for trailer video
-update the store with trailer video Data
-Embeded the youTube and made it autoplay
-Build secondary components
-Build the movieList
-Build the movieCard
-TMDB image CDN url
-created usePopularMovies Custom Hook(for popular movies)
-GPT search page
-GPT search bar
-Multi-Language feature
-Intigrate GPT API's
-Get open AI API key
-Gpt search Api call
-fetched gpt movies suggestion from TMDB
-created gptSlice
-Reused MovieList Component for displaying suggested movies
-Added .env file
-Added .env file to gitignore
-made site responsive

# Browse Page

MainContainer
-VideoBackground
-Video Title

Secondary container
-movieList*n
-cards*n

# features

- login/signup screen
- browse (after authentication)
  -main movie

  - trailer in background
  - movie title and description
  - movie suggestons
    -movie scroll

  -movie GPT
  -search bar
  -movie suggetions
