<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8.667 8.1V18m-3.334 0v-7.7M2 16.9v-2.2m15.556-3.3h1.11C20.2 11.4 22 12.801 22 14.7c0 1.823-1.667 3.3-3.333 3.3H12V7c3.333 0 5 1.65 5.556 4.4\"/>";
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
