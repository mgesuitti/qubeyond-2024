import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Joke } from '../../models/joke';
import { JokeService } from '../../services/joke.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
})
export class JokeListComponent implements AfterViewInit {
  public dataSource: MatTableDataSource<Joke> = new MatTableDataSource<Joke>(
    []
  );
  public displayedColumns: string[] = ['setup', 'punchline'];

  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private jokeService: JokeService) {}

  public ngAfterViewInit(): void {
    this.loadJokes();
  }

  public loadJokes(): void {
    this.jokeService.getJokes().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
