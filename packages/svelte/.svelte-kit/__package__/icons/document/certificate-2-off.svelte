<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 12a3 3 0 1 0 3 3m-4-8h3m-4 11v4l2-1 2 1v-4m-4 1H8a2 2 0 0 1-2-2V6m1.18-2.825C7.43 3.063 7.709 3 8 3h8a2 2 0 0 1 2 2v9m-.175 3.82A2 2 0 0 1 16 19h-2M3 3l18 18\"/>";
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
