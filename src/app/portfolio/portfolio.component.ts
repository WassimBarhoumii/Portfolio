import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{

  projects = {} as Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  angular: boolean = false;
  wordpress: boolean = false;
  java: boolean = false;
  css: boolean = false;
  bootstrap: boolean = false;
  mongodb: boolean = false;
  reactjs: boolean = false;
  javascript: boolean = false;
  filtering: Boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Wassim Barhoumi - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    } 
    if (this.wordpress) {
      filterTags.push(Tag.WORDPRESS);
    }
    if (this.java) {
      filterTags.push(Tag.JAVA);
    }
    if (this.css) {
      filterTags.push(Tag.CSS);
    }
    if (this.bootstrap) {
      filterTags.push(Tag.BOOTSTRAP);
    }
    if (this.mongodb) {
      filterTags.push(Tag.MONGODB);
    }
    if (this.reactjs) {
      filterTags.push(Tag.REACTJS);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }  
    
    if (this.angular || this.bootstrap || this.css || this.java || this.javascript || this.mongodb || this.reactjs || this.typescript || this.wordpress) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters(){
    this.angular = false;
    this.wordpress = false;
    this.reactjs = false;
    this.mongodb = false;
    this.bootstrap = false;
    this.java = false;
    this.javascript = false;
    this.typescript = false;
    this.css = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}
