<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 6c0-.556.227-1.059.593-1.421M9 4h1.5m3 0H15m3 0a2 2 0 0 1 2 2m0 3v1.5m0 3V15m-.598 4.426A2 2 0 0 1 18 20m-3 0h-1.5m-3 0H9m-3 0a2 2 0 0 1-2-2m0-3v-1.5m0-3V9M3 3l18 18\"/>";
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
