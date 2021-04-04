import React from 'react';
import { Tag } from 'antd';
import { Button, Card, Elevation } from "@blueprintjs/core";

export default function Posts({ posts, edit, deleteData }) {
  return (
    <section>
      {
        posts && posts.length === 0 ?
          <div>No posts found</div> :
          <>
            {
              (posts || []).map(i => (
                <Card className={`df jcsb mb10 ${i.order == 1 ? 'green' : 'red'}`}
                  key={i.id} elevation={Elevation.TWO}
                >
                  <div className="content">
                    <h5>{i.title}</h5>
                    <p>{i.body ? i.body : '-'}</p>
                    <>
                      {
                        (i.tags || []).map((i, j) => <Tag key={j}>{i}</Tag>)
                      }
                    </>
                  </div>
                  {
                    <div className={`actions`}>
                      <Button onClick={() => edit(i.id)}>Edit</Button>
                      <Button onClick={() => deleteData(i.id)}>Delete</Button>
                    </div>
                  }
                </Card>
              ))
            }
          </>
      }
    </section>
  )
}
