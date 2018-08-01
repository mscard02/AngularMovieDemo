export class Movie{
    
    constructor(movieId: number, voteAverage:number, title:string, posterImage: string, Overview: string, releaseDate: Date)
    {
        this.MovieId = movieId;
        this.VoteAverage = voteAverage;
        this.Title = title;
        this.PosterImage = posterImage;
        this.Overview = Overview;
        this.ReleaseDate = releaseDate;
    }

    public MovieId: number;
    public VoteAverage: number;
    public Title: string;
    public PosterImage: string;
    public Overview: string;
    public ReleaseDate: Date;
}