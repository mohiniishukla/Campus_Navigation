import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CollegeInfoDocument } from '../entity/college-info.entity';

@Injectable()
export class CollegeInfoService {
    constructor(@InjectModel('collegeInfo')
private readonly collegeInfoModel: Model<CollegeInfoDocument>){}


async getCollegeInfo(){
    try{
        return await this.collegeInfoModel.find({});
    }
    catch(error){
        throw error;
    }
}


async shortestPath(){
    /**
     * Using Djikstra Algo
     */
    // const distances: { [key: string]: number } = {};
    // const prevNodes: { [key: string]: string | null } = {};
    // const unvisited = new Set<string>();

    // Object.keys(collegeMap).forEach(location => {
    //     distances[location] = Infinity;
    //     prevNodes[location] = null;
    //     unvisited.add(location);
    // });
    // distances[start] = 0;

    // while (unvisited.size) {
    //     const current = [...unvisited].reduce((a, b) => distances[a] < distances[b] ? a : b);
    //     unvisited.delete(current);

    //     if (current === end) {
    //         let path = [];
    //         while (current) {
    //             path.unshift(current);
    //             current = prevNodes[current] as string;
    //         }
    //         return path;
    //     }

    //     for (const [neighbor, weight] of Object.entries(collegeMap[current] || {})) {
    //         if (!unvisited.has(neighbor)) continue;
    //         const newDistance = distances[current] + weight;
    //         if (newDistance < distances[neighbor]) {
    //             distances[neighbor] = newDistance;
    //             prevNodes[neighbor] = current;
    //         }
    //     }
    // }
    // return [];
}
}
