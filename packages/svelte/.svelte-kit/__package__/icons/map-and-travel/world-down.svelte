<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20.986 12.509a9 9 0 1 0-8.455 8.476M3.6 9h16.8M3.6 15h10.9m-3-12a17 17 0 0 0 0 18m1-18c2.313 3.706 3.07 7.857 2.27 12M19 16v6m0 0 3-3m-3 3-3-3\"/>";
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
