<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M2.363 5.6C1.755 3.615 3.614 1.76 5.598 2.366l14.319 4.382.214.074c2.139.847 2.185 3.95-.031 4.814l-5.643 2.202a1.11 1.11 0 0 0-.375.244c-.107.106-.19.235-.245.375l-2.202 5.644c-.891 2.287-4.17 2.165-4.889-.183L2.363 5.6z\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
