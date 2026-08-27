<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 20l-1.064-3.151a1.25 1.25 0 0 0-.785-.785L4 15m6.987-1.057l1.957 5.016a1.64 1.64 0 0 0 3.087-.116l3.895-12.727a1.64 1.64 0 0 0-2.042-2.042L5.157 7.969a1.64 1.64 0 0 0-.116 3.087l5.017 1.957c.426.166.763.503.929.93z\"/>";
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
