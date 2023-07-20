import React from 'react'

export default function CheckRecords({ name, data, head }) {
    return (
      <div class="w-full flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-[1px] inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-center">
                {head}
                <tbody>
                  {data}
                  {data}
                  {data}
                  {data}
                  {data}
                  {data}
                  {data}
                  {data}
                  {data}
                  {data}
                  {data}
                  {data}
                  {data}
                  {data}
                  {data}
                  {data}
                  {data}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
