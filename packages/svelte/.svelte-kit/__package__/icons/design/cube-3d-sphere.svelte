<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m6 17.6-2-1.1V14m0-4V7.5m0 0 2-1.1M4 7.5l2 1.1m4-4.5L12 3l2 1.1m4 2.3 2 1.1m0 0V10m0-2.5-2 1.1m2 5.4v2.5l-2 1.12m-4 2.28L12 21m0 0-2-1.1m2 1.1v-2.5m0-6.5 2-1.1M12 12v2.5m0-2.5-2-1.12\"/>";
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
