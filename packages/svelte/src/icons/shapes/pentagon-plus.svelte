<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12.5 21.015H7.042c-.418 0-.825-.13-1.163-.374a1.96 1.96 0 0 1-.718-.978L2.097 10.33a1.94 1.94 0 0 1 0-1.21c.129-.394.38-.737.719-.98l8.02-5.767a1.99 1.99 0 0 1 2.327 0l8.02 5.768c.695.498.985 1.382.72 2.189l-.78 2.376M16 19.03h6m-3-2.969V22\"/>";
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
