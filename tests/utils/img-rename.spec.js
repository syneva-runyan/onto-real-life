import ImgRename from "../../source/js/utils/img-rename.js";
import fs from 'fs';
import assert from 'assert';
import minimist from 'minimist';

jest.mock('fs');
jest.mock('assert');
jest.mock('minimist');

describe("Img Renaming Tool", () => {
    it('should execute fs.rename once for ever suffix provided', () => {
        fs.rename.mockReset();
        ImgRename("ogPrefix", "newPrefix", ".img", "someDir/", ["suffixOne", "suffixTwo"]);
        expect(fs.rename.mock.calls.length).toEqual(2);
    });
});
