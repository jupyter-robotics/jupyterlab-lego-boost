/*
This extension uses the pylgbst library, which is under the following license:

MIT License

Copyright (c) 2017 Andrey Pokhilko

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import * as Blockly from 'blockly';
import BlocklyPy from 'blockly/python';

var lego_boost_color = '#550a8a';

/*
 * Block definitions
 */

Blockly.Blocks['lego_boost_connect'] = {
  init: function () {
    this.appendValueInput('BLUETOOTH_ADDRESS')
      .setCheck('String')
      .appendField('Connect to MoveHub on address');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Connect to Lego Boost given its Bluetooth address.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_movement_forward'] = {
  init: function () {
    this.appendValueInput('TIME')
      .setCheck('Number')
      .appendField('Move forward for time');
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('and with speed');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip(
      'Move motors AB straight forward for a certain time and speed.'
    );
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_movement_backwards'] = {
  init: function () {
    this.appendValueInput('TIME')
      .setCheck('Number')
      .appendField('Move backwards for time');
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('and with speed');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip(
      'Move motors AB straight backwards for a certain time and speed.'
    );
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_movement_rotate_left'] = {
  init: function () {
    this.appendDummyInput().appendField('Rotate left');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Rotate left.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_movement_rotate_right'] = {
  init: function () {
    this.appendDummyInput().appendField('Rotate right');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Rotate right.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_movement_rotate_180_left'] = {
  init: function () {
    this.appendDummyInput().appendField('Rotate 180° to the left');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Rotate 180° to the left');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_movement_rotate_180_right'] = {
  init: function () {
    this.appendDummyInput().appendField('Rotate 180° to the right');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Rotate 180° to the right');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_movement_rotate_360_left'] = {
  init: function () {
    this.appendDummyInput().appendField('Rotate 360° to the left');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Rotate 360° to the left');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_movement_rotate_360_right'] = {
  init: function () {
    this.appendDummyInput().appendField('Rotate 360° to the right');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Rotate 360° to the right');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_movement_turn_right_timed'] = {
  init: function () {
    this.appendValueInput('TIME')
      .setCheck('Number')
      .appendField('Turn right for time');
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('and with speed');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Turn right for a certain time and speed.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_movement_turn_left_timed'] = {
  init: function () {
    this.appendValueInput('TIME')
      .setCheck('Number')
      .appendField('Turn left for time');
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('and with speed');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Turn left for a certain time and speed.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_movement_turn_right_angled'] = {
  init: function () {
    this.appendValueInput('ANGLE')
      .setCheck('Number')
      .appendField('Turn right at ');
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('angle and with speed');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Turn right at a certain angle and speed.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_movement_turn_left_angled'] = {
  init: function () {
    this.appendValueInput('ANGLE')
      .setCheck('Number')
      .appendField('Turn left at ');
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('angle and with speed');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Turn left at a certain angle and speed.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_move_motor_ab_timed'] = {
  init: function () {
    this.appendValueInput('TIME')
      .setCheck('Number')
      .appendField('Move both motors for time');
    this.appendValueInput('SPEED_A')
      .setCheck('Number')
      .appendField('and speeds for the right motor');
    this.appendValueInput('SPEED_B')
      .setCheck('Number')
      .appendField('and left motor');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Move motors AB for a certain time and speed.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_move_motor_ab_angled'] = {
  init: function () {
    this.appendValueInput('ANGLE')
      .setCheck('Number')
      .appendField('Move both motors at angle');
    this.appendValueInput('SPEED_A')
      .setCheck('Number')
      .appendField('with speeds for right motor');
    this.appendValueInput('SPEED_B')
      .setCheck('Number')
      .appendField('and left motor');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Move group motors AB at a certain angle and speed.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_stop_motors'] = {
  init: function () {
    this.appendDummyInput().appendField('Stop motors');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Stop motor.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_disconnect'] = {
  init: function () {
    this.appendDummyInput().appendField('Disconnect from MoveHub');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Disconnect from Lego Boost.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lego_boost_sleep'] = {
  init: function () {
    this.appendValueInput('SECONDS').setCheck('Number').appendField('Wait for');
    this.appendDummyInput('minutes');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(lego_boost_color);
    this.setTooltip('Wait for a given time.');
    this.setHelpUrl('');
  }
};
/*
 * Generators
 */

BlocklyPy['lego_boost_connect'] = function (block) {
  var value_bluetooth_address = BlocklyPy.valueToCode(
    block,
    'BLUETOOTH_ADDRESS',
    BlocklyPy.ORDER_ATOMIC
  );

  var code =
    'conn = get_connection_bleak(hub_mac=' +
    value_bluetooth_address +
    ', hub_name=MoveHub.DEFAULT_NAME)\nhub = MoveHub(conn)\n';
  return code;
};

Blockly.Blocks['lego_boost_connect'].toplevel_init = `
from pylgbst.hub import MoveHub
from pylgbst import get_connection_bleak
import time 

`;

BlocklyPy['lego_boost_movement_forward'] = function (block) {
  var value_time = BlocklyPy.valueToCode(block, 'TIME', BlocklyPy.ORDER_ATOMIC);

  var value_speed = BlocklyPy.valueToCode(
    block,
    'SPEED',
    BlocklyPy.ORDER_ATOMIC
  );

  var code =
    'hub.motor_AB.timed(' +
    value_time +
    ', ' +
    value_speed +
    ', ' +
    value_speed +
    ')\n';
  return code;
};

BlocklyPy['lego_boost_movement_backwards'] = function (block) {
  var value_time = BlocklyPy.valueToCode(block, 'TIME', BlocklyPy.ORDER_ATOMIC);

  var value_speed = BlocklyPy.valueToCode(
    block,
    'SPEED',
    BlocklyPy.ORDER_ATOMIC
  );

  var code =
    'hub.motor_AB.timed( ' +
    value_time +
    ', -' +
    value_speed +
    ', -' +
    value_speed +
    ')\n';
  return code;
};

BlocklyPy['lego_boost_movement_rotate_right'] = function (block) {
  var code = 'hub.motor_A.angled(540, 1)\n';
  return code;
};

BlocklyPy['lego_boost_movement_rotate_left'] = function (block) {
  var code = 'hub.motor_B.angled(540, 1)\n';
  return code;
};

BlocklyPy['lego_boost_movement_rotate_180_left'] = function (block) {
  var code = 'hub.motor_B.angled(1080, 1)\n';
  return code;
};

BlocklyPy['lego_boost_movement_rotate_180_right'] = function (block) {
  var code = 'hub.motor_A.angled(1080, 1)\n';
  return code;
};

BlocklyPy['lego_boost_movement_rotate_360_left'] = function (block) {
  var code = 'hub.motor_B.timed(1.7, 1)\n';
  return code;
};

BlocklyPy['lego_boost_movement_rotate_360_right'] = function (block) {
  var code = 'hub.motor_A.timed(1.7, 1)\n';
  return code;
};

BlocklyPy['lego_boost_movement_turn_right_timed'] = function (block) {
  var value_time = BlocklyPy.valueToCode(block, 'TIME', BlocklyPy.ORDER_ATOMIC);

  var value_speed = BlocklyPy.valueToCode(
    block,
    'SPEED',
    BlocklyPy.ORDER_ATOMIC
  );

  var code = 'hub.motor_A.timed(' + value_time + ', ' + value_speed + ')\n';
  return code;
};

BlocklyPy['lego_boost_movement_turn_left_timed'] = function (block) {
  var value_time = BlocklyPy.valueToCode(block, 'TIME', BlocklyPy.ORDER_ATOMIC);

  var value_speed = BlocklyPy.valueToCode(
    block,
    'SPEED',
    BlocklyPy.ORDER_ATOMIC
  );

  var code = 'hub.motor_B.timed(' + value_time + ', ' + value_speed + ')\n';
  return code;
};

BlocklyPy['lego_boost_movement_turn_right_angled'] = function (block) {
  var value_angle = BlocklyPy.valueToCode(
    block,
    'ANGLE',
    BlocklyPy.ORDER_ATOMIC
  );

  var value_speed = BlocklyPy.valueToCode(
    block,
    'SPEED',
    BlocklyPy.ORDER_ATOMIC
  );

  var code =
    'hub.motor_A.angled(' + value_angle * 6 + ', ' + value_speed + ')\n';
  return code;
};

BlocklyPy['lego_boost_movement_turn_left_angled'] = function (block) {
  var value_angle = BlocklyPy.valueToCode(
    block,
    'ANGLE',
    BlocklyPy.ORDER_ATOMIC
  );

  var value_speed = BlocklyPy.valueToCode(
    block,
    'SPEED',
    BlocklyPy.ORDER_ATOMIC
  );

  var code =
    'hub.motor_B.angled(' + value_angle * 6 + ', ' + value_speed + ')\n';
  return code;
};

BlocklyPy['lego_boost_move_motor_ab_timed'] = function (block) {
  var value_time = BlocklyPy.valueToCode(block, 'TIME', BlocklyPy.ORDER_ATOMIC);

  var value_speed_a = BlocklyPy.valueToCode(
    block,
    'SPEED_A',
    BlocklyPy.ORDER_ATOMIC
  );

  var value_speed_b = BlocklyPy.valueToCode(
    block,
    'SPEED_B',
    BlocklyPy.ORDER_ATOMIC
  );

  var code =
    'hub.motor_AB.timed(' +
    value_time +
    ', ' +
    value_speed_a +
    ', ' +
    value_speed_b +
    ')\n';
  return code;
};

BlocklyPy['lego_boost_move_motor_ab_angled'] = function (block) {
  var value_angle = BlocklyPy.valueToCode(
    block,
    'ANGLE',
    BlocklyPy.ORDER_ATOMIC
  );

  var value_speed_a = BlocklyPy.valueToCode(
    block,
    'SPEED_A',
    BlocklyPy.ORDER_ATOMIC
  );

  var value_speed_b = BlocklyPy.valueToCode(
    block,
    'SPEED_B',
    BlocklyPy.ORDER_ATOMIC
  );

  var code =
    'hub.motor_AB.angled(' +
    value_angle +
    ', ' +
    value_speed_a * ', ' +
    value_speed_b +
    ')\n';
  return code;
};

BlocklyPy['lego_boost_start_speed'] = function (block) {
  var value_speed = BlocklyPy.valueToCode(
    block,
    'SPEED',
    BlocklyPy.ORDER_ATOMIC
  );

  var code = 'hub.motor_external.start_speed(' + value_speed + ')\n';
  return code;
};

BlocklyPy['lego_boost_stop_motors'] = function (block) {
  var code = 'hub.motor_external.stop()\n';
  return code;
};

BlocklyPy['lego_boost_disconnect'] = function (block) {
  var code = 'hub.disconnect()\n';
  return code;
};

BlocklyPy['lego_boost_sleep'] = function (block) {
  var value_seconds = BlocklyPy.valueToCode(
    block,
    'SECONDS',
    BlocklyPy.ORDER_ATOMIC
  );

  var code = 'time.sleep(' + value_seconds + ')\n';
  return code;
};

// Creating a toolbox containing all the main blocks
// and adding the lego boost catgory.
const TOOLBOX = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'Logic',
      colour: '210',
      contents: [
        {
          kind: 'block',
          type: 'controls_if'
        },
        {
          kind: 'BLOCK',
          type: 'logic_compare'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="logic_operation"></block>',
          type: 'logic_operation'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="logic_negate"></block>',
          type: 'logic_negate'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="logic_boolean"></block>',
          type: 'logic_boolean'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="logic_null"></block>',
          type: 'logic_null'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="logic_ternary"></block>',
          type: 'logic_ternary'
        }
      ]
    },
    {
      kind: 'category',
      name: 'Loops',
      colour: '120',
      contents: [
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="controls_repeat_ext">\n          <value name="TIMES">\n            <shadow type="math_number">\n              <field name="NUM">10</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'controls_repeat_ext'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="controls_whileUntil"></block>',
          type: 'controls_whileUntil'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="controls_for">\n          <value name="FROM">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n          <value name="TO">\n            <shadow type="math_number">\n              <field name="NUM">10</field>\n            </shadow>\n          </value>\n          <value name="BY">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'controls_for'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="controls_forEach"></block>',
          type: 'controls_forEach'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="controls_flow_statements"></block>',
          type: 'controls_flow_statements'
        }
      ]
    },
    {
      kind: 'CATEGORY',
      name: 'Math',
      colour: '230',
      contents: [
        {
          kind: 'BLOCK',
          blockxml: '<block type="math_number"></block>',
          type: 'math_number'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_arithmetic">\n          <value name="A">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n          <value name="B">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_arithmetic'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_single">\n          <value name="NUM">\n            <shadow type="math_number">\n              <field name="NUM">9</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_single'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_trig">\n          <value name="NUM">\n            <shadow type="math_number">\n              <field name="NUM">45</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_trig'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="math_constant"></block>',
          type: 'math_constant'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_number_property">\n          <value name="NUMBER_TO_CHECK">\n            <shadow type="math_number">\n              <field name="NUM">0</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_number_property'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_change">\n          <value name="DELTA">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_change'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_round">\n          <value name="NUM">\n            <shadow type="math_number">\n              <field name="NUM">3.1</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_round'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="math_on_list"></block>',
          type: 'math_on_list'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_modulo">\n          <value name="DIVIDEND">\n            <shadow type="math_number">\n              <field name="NUM">64</field>\n            </shadow>\n          </value>\n          <value name="DIVISOR">\n            <shadow type="math_number">\n              <field name="NUM">10</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_modulo'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_constrain">\n          <value name="VALUE">\n            <shadow type="math_number">\n              <field name="NUM">50</field>\n            </shadow>\n          </value>\n          <value name="LOW">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n          <value name="HIGH">\n            <shadow type="math_number">\n              <field name="NUM">100</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_constrain'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="math_random_int">\n          <value name="FROM">\n            <shadow type="math_number">\n              <field name="NUM">1</field>\n            </shadow>\n          </value>\n          <value name="TO">\n            <shadow type="math_number">\n              <field name="NUM">100</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'math_random_int'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="math_random_float"></block>',
          type: 'math_random_float'
        }
      ]
    },
    {
      kind: 'CATEGORY',
      name: 'Text',
      colour: '160',
      contents: [
        {
          kind: 'BLOCK',
          blockxml: '<block type="text"></block>',
          type: 'text'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="text_join"></block>',
          type: 'text_join'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_append">\n          <value name="TEXT">\n            <shadow type="text"></shadow>\n          </value>\n        </block>',
          type: 'text_append'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_length">\n          <value name="VALUE">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_length'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_isEmpty">\n          <value name="VALUE">\n            <shadow type="text">\n              <field name="TEXT"></field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_isEmpty'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_indexOf">\n          <value name="VALUE">\n            <block type="variables_get">\n              <field name="VAR">text</field>\n            </block>\n          </value>\n          <value name="FIND">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_indexOf'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_charAt">\n          <value name="VALUE">\n            <block type="variables_get">\n              <field name="VAR">text</field>\n            </block>\n          </value>\n        </block>',
          type: 'text_charAt'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_getSubstring">\n          <value name="STRING">\n            <block type="variables_get">\n              <field name="VAR">text</field>\n            </block>\n          </value>\n        </block>',
          type: 'text_getSubstring'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_changeCase">\n          <value name="TEXT">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_changeCase'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_trim">\n          <value name="TEXT">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_trim'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_print">\n          <value name="TEXT">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_print'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="text_prompt_ext">\n          <value name="TEXT">\n            <shadow type="text">\n              <field name="TEXT">abc</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'text_prompt_ext'
        }
      ]
    },
    {
      kind: 'CATEGORY',
      name: 'Lists',
      colour: '260',
      contents: [
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_create_with">\n          <mutation items="0"></mutation>\n        </block>',
          type: 'lists_create_with'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="lists_create_with"></block>',
          type: 'lists_create_with'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_repeat">\n          <value name="NUM">\n            <shadow type="math_number">\n              <field name="NUM">5</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'lists_repeat'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="lists_length"></block>',
          type: 'lists_length'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="lists_isEmpty"></block>',
          type: 'lists_isEmpty'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_indexOf">\n          <value name="VALUE">\n            <block type="variables_get">\n              <field name="VAR">list</field>\n            </block>\n          </value>\n        </block>',
          type: 'lists_indexOf'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_getIndex">\n          <value name="VALUE">\n            <block type="variables_get">\n              <field name="VAR">list</field>\n            </block>\n          </value>\n        </block>',
          type: 'lists_getIndex'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_setIndex">\n          <value name="LIST">\n            <block type="variables_get">\n              <field name="VAR">list</field>\n            </block>\n          </value>\n        </block>',
          type: 'lists_setIndex'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_getSublist">\n          <value name="LIST">\n            <block type="variables_get">\n              <field name="VAR">list</field>\n            </block>\n          </value>\n        </block>',
          type: 'lists_getSublist'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="lists_split">\n          <value name="DELIM">\n            <shadow type="text">\n              <field name="TEXT">,</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'lists_split'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="lists_sort"></block>',
          type: 'lists_sort'
        }
      ]
    },
    {
      kind: 'CATEGORY',
      name: 'Color',
      colour: '20',
      contents: [
        {
          kind: 'BLOCK',
          blockxml: '<block type="colour_picker"></block>',
          type: 'colour_picker'
        },
        {
          kind: 'BLOCK',
          blockxml: '<block type="colour_random"></block>',
          type: 'colour_random'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="colour_rgb">\n          <value name="RED">\n            <shadow type="math_number">\n              <field name="NUM">100</field>\n            </shadow>\n          </value>\n          <value name="GREEN">\n            <shadow type="math_number">\n              <field name="NUM">50</field>\n            </shadow>\n          </value>\n          <value name="BLUE">\n            <shadow type="math_number">\n              <field name="NUM">0</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'colour_rgb'
        },
        {
          kind: 'BLOCK',
          blockxml:
            '<block type="colour_blend">\n          <value name="COLOUR1">\n            <shadow type="colour_picker">\n              <field name="COLOUR">#ff0000</field>\n            </shadow>\n          </value>\n          <value name="COLOUR2">\n            <shadow type="colour_picker">\n              <field name="COLOUR">#3333ff</field>\n            </shadow>\n          </value>\n          <value name="RATIO">\n            <shadow type="math_number">\n              <field name="NUM">0.5</field>\n            </shadow>\n          </value>\n        </block>',
          type: 'colour_blend'
        }
      ]
    },
    {
      kind: 'SEP'
    },
    {
      kind: 'CATEGORY',
      colour: '330',
      custom: 'VARIABLE',
      name: 'Variables'
    },
    {
      kind: 'CATEGORY',
      colour: '290',
      custom: 'PROCEDURE',
      name: 'Functions'
    },
    {
      kind: 'SEP'
    },
    {
      kind: 'CATEGORY',
      colour: lego_boost_color,
      name: 'Lego Boost',
      contents: [
        {
          kind: 'BLOCK',
          type: 'lego_boost_connect'
        },
        {
          kind: 'BLOCK',
          type: 'lego_boost_movement_forward'
        },
        {
          kind: 'BLOCK',
          type: 'lego_boost_movement_backwards'
        },
        {
          kind: 'BLOCK',
          type: 'lego_boost_movement_rotate_left'
        },
        {
          kind: 'BLOCK',
          type: 'lego_boost_movement_rotate_right'
        },
        {
          kind: 'BLOCK',
          type: 'lego_boost_movement_rotate_180_left'
        },
        {
          kind: 'BLOCK',
          type: 'lego_boost_movement_rotate_180_right'
        },
        {
          kind: 'BLOCK',
          type: 'lego_boost_movement_rotate_360_left'
        },
        {
          kind: 'BLOCK',
          type: 'lego_boost_movement_rotate_360_right'
        },
        {
          kind: 'BLOCK',
          type: 'lego_boost_movement_turn_left_timed'
        },
        {
          kind: 'BLOCK',
          type: 'lego_boost_movement_turn_right_timed'
        },
        {
          kind: 'BLOCK',
          type: 'lego_boost_movement_turn_left_angled'
        },
        {
          kind: 'BLOCK',
          type: 'lego_boost_movement_turn_right_angled'
        },
        {
          kind: 'BLOCK',
          type: 'lego_boost_move_motor_ab_timed'
        },
        {
          kind: 'BLOCK',
          type: 'lego_boost_move_motor_ab_angled'
        },
        {
          kind: 'BLOCK',
          type: 'lego_boost_stop_motors'
        },
        {
          kind: 'BLOCK',
          type: 'lego_boost_disconnect'
        },
        {
          kind: 'BLOCK',
          type: 'lego_boost_sleep'
        }
      ]
    }
  ]
};

const BlocklyBoost = {
  Blocks: Blockly.Blocks,
  Generator: BlocklyPy,
  Toolbox: TOOLBOX
};

export default BlocklyBoost;
