<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 11v.01M11 10v.01M10 14v.01m1.059-7.94a8 8 0 1 0 .32 15.81M15.969 9h4m-4 0c0-2-1-2.5-1-4a3 3 0 0 1 6 0c0 1.5-1 2-1 4m-4 0c0 2.5-2 4.5-2 7 0 2.6 1.9 6 1.9 6h4.1s2-3.4 2-6c0-2.5-2-4.5-2-7\"/>";
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
