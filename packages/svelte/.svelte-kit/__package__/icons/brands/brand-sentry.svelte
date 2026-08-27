<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 18c-.007.381.1.755.306 1.076A2 2 0 0 0 4.89 20c.646.033-.537 0 .11 0h3a4.99 4.99 0 0 0-3.66-4.81q.838-1.459 2.04-3.531A9 9 0 0 1 12 20h4m0 0h3a2 2 0 0 0 1.84-2.75L13.74 5a2 2 0 0 0-3.5 0L8.4 8.176C12.882 10.226 16 14.747 16 20\"/>";
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
