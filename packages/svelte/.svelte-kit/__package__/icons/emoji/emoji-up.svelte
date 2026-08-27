<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20.984 12.536a9 9 0 1 0-8.463 8.449M19 22v-6m0 0 3 3m-3-3-3 3m-7-9h.01M15 10h.01M9.5 15c.658.64 1.56 1 2.5 1s1.842-.36 2.5-1\"/>";
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
