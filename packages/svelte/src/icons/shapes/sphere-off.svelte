<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M2.998 12c0 1.657 4.03 3 9 3 .987 0 1.936-.053 2.825-.15m3.357-.67c1.735-.547 2.818-1.32 2.818-2.18m-.949 4.027A9 9 0 0 0 7.966 3.952m-2.34 1.692a9 9 0 0 0 12.74 12.716M2.998 3l18 18\"/>";
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
