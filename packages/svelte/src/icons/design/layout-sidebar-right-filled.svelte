<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6.167 20.75a2.917 2.917 0 0 1-2.917-2.917V6.167A2.917 2.917 0 0 1 6.167 3.25h11.666a2.917 2.917 0 0 1 2.917 2.917v11.666a2.917 2.917 0 0 1-2.917 2.917zm7.777-15.556H6.167a.97.97 0 0 0-.973.973v11.666a.97.97 0 0 0 .973.973h7.777z\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
