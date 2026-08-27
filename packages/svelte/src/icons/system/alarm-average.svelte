<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6.355 3 3.25 5.25M17.645 3l3.105 2.25M7.484 13.125h1.129L10.87 16.5l2.258-6.75 2.258 3.375h1.13m-12.42 0a7.85 7.85 0 0 0 2.315 5.569A7.9 7.9 0 0 0 12 21a7.93 7.93 0 0 0 5.588-2.306 7.87 7.87 0 0 0 2.315-5.569 7.86 7.86 0 0 0-2.315-5.568A7.92 7.92 0 0 0 12 5.25c-2.096 0-4.106.83-5.588 2.307a7.86 7.86 0 0 0-2.315 5.568\"/>";
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
