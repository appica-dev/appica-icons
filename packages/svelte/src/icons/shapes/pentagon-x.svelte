<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m14 14.073-4-3.955m0 3.955 4-3.955m-.837-7.744 8.02 5.763c.695.498.985 1.381.72 2.187l-3.064 9.324c-.13.393-.38.736-.718.978a2 2 0 0 1-1.163.374H7.042c-.418 0-.825-.13-1.163-.374a1.96 1.96 0 0 1-.718-.978l-3.064-9.324a1.94 1.94 0 0 1 0-1.21c.129-.392.38-.735.719-.977l8.02-5.763a1.99 1.99 0 0 1 2.327 0\"/>";
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
