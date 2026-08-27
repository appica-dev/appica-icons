<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5.634 5.638a9 9 0 0 0 12.728 12.727m1.68-2.32A9 9 0 0 0 7.956 3.957M16 12h2m-5 3h2m-2 3h1m-1-9h4m-4-3h1M3 3l18 18\"/>";
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
