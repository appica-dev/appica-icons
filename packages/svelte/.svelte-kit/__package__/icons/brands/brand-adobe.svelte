<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m12.893 4.514 7.977 14a.993.993 0 0 1-.394 1.365 1.04 1.04 0 0 1-.5.127H16.5l-4.5-8-2.5 4H11l2 4H4.023c-.565 0-1.023-.45-1.023-1 0-.171.045-.34.13-.49l7.977-13.993a1.035 1.035 0 0 1 1.786 0z\"/>";
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
