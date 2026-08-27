<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M2.994 2.998 21.02 21M10.016 6.014 12 2l3.09 6.254 6.91 1-4.427 4.304m.012 4.01.589 3.427-6.167-3.245-6.18 3.245 1.18-6.874L2 9.254l6.336-.917\"/>";
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
