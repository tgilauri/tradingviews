"use client";
import React from 'react'
import {Col, Layout, Row, Segmented} from "antd";
import DataBlock from "@/app/components/Block/DataBlock";

export default function Home() {
  return (
    <Layout>
      <Layout.Content>
        <Row>
          <Col offset={4} sm={16}>
            <DataBlock title={'Block title'} onPeriodChange={console.log}></DataBlock>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  )
}
