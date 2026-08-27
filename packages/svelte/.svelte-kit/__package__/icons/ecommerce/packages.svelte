<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m2 13.5 5 3V22m-5-8.5 5-3 5 3m-10 0V19l5 3m5-8.5V19m0-5.5 5 3m-5-3 5-3m-5 3V8m0 11-5 3m5-3 5 3M7 16.545l5-3.03m5 2.985V22m0-5.5 5-3m-5-3 5 3m-5-3V5m5 8.5V19l-5 3M12 8 7 5l5-3 5 3m-5 3 5-3M7 5.03v5.455\"/>";
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
