<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11.453 20.846a12 12 0 0 1-7.028-5.791A12 12 0 0 1 3.487 6a12.01 12.01 0 0 0 8.506-3A12.01 12.01 0 0 0 20.5 6c.679 2.31.647 4.769-.09 7.06M14.996 19l2.001 2L21 17\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
