<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 14v-3c0-1.953.7-3.742 1.862-5.13M4 14a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4.044-9.955A8 8 0 0 1 20 11v3m0 0a2 2 0 0 0-2-2h-1c-.297 0-.578.065-.831.18M20 14v2m-2 3c0 1.657-2.686 3-6 3m6-3c.291 0 .567-.062.817-.174M18 19h-1a2 2 0 0 1-2-2v-2M3 3l18 18\"/>";
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
