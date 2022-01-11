// Copyright 2022 Cartesi Pte. Ltd.

// SPDX-License-Identifier: Apache-2.0
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use
// this file except in compliance with the License. You may obtain a copy of the
// License at http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software distributed
// under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
// CONDITIONS OF ANY KIND, either express or implied. See the License for the
// specific language governing permissions and limitations under the License.

import "@nomiclabs/hardhat-etherscan";
import "hardhat-deploy";
import { task } from "hardhat/config";

task(
    "verify:deployments",
    "Verify all contracts deployed by hardhat-deploy",
    async (args, hre) => {
        // load all deployments
        const deployments = await hre.deployments.all();

        for (const contractName in deployments) {
            if (deployments.hasOwnProperty(contractName)) {
                const deployment = deployments[contractName];
                console.log(
                    `verifying ${contractName} (${deployment.address})...`
                );

                // call the verify plugin
                await hre.run("verify:verify", {
                    address: deployment.address,
                    constructorArguments: deployment.args,
                    libraries: deployment.libraries,
                });
            }
        }
    }
);
