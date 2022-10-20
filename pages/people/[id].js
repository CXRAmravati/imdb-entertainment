import MoviePageHeader from "components/movie-page-header.component";
import Image from "next/image";
import { useRouter } from "next/router";
import { getPersonDetails } from "pages/api";
import React from "react";
import { useQuery } from "react-query";

function PersonDetail() {
    const router=useRouter()
    let id=router.query.id
    console.log(id)
    const personQuery=useQuery(["personDetail",id],()=>getPersonDetails(id))
    const personDetail=personQuery.isSuccess?personQuery.data:[]
    console.log(personDetail.profile_path)
  return (
    <div className="people-page-wrapper">
      <div className="people-left">
        <div className="person-img">
            <Image  src={`https://image.tmdb.org/t/p/original${personDetail.profile_path}`} width={250} height={400}/>
        </div>
        <div className="person-basic-detail"></div>

      </div>
      <div className="people-right">

      </div>
    </div>
  );
}

export default PersonDetail;
