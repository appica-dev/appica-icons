<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 21a9 9 0 0 1 0-18m0 18a9 9 0 0 0 6.364-2.636M12 21a9 9 0 0 0 6.364-2.636m0 0A9 9 0 0 0 21 12m-2.636 6.364A9 9 0 0 0 21 12m0 0a9 9 0 0 0-2.636-6.364M21 12a9 9 0 0 0-2.636-6.364m0 0A9 9 0 0 0 12 3m6.364 2.636A9 9 0 0 0 12 3m3 7h-.01M10 14v2a2 2 0 0 0 4 0v-2m1.5 0h-7M7 10c.5-1 2.5-1 3 0\"/>";
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
